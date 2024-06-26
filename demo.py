from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from typing import Optional, Any, Dict
from llama_cpp import Llama
import streamlit as st
from langchain.llms.base import LLM
from llama_index import LLMPredictor, LangchainEmbedding, ServiceContext, PromptHelper
from typing import Optional, List, Mapping, Any
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
import pandas as pd
from pydantic import BaseModel

# Constants
MODEL_NAME = 'mellogpt.Q3_K_S.gguf'
MODEL_PATH = 'D:\python\Mantal Health 1\python\chatbot\mellogpt.Q3_K_S.gguf'
KNOWLEDGE_BASE_FILE = "mentalhealth.csv"
NUM_THREADS = 8

# Initialize FastAPI app
app = FastAPI()

# Load Knowledge Base
def load_knowledge_base():
    df = pd.read_csv(KNOWLEDGE_BASE_FILE)
    return dict(zip(df['Questions'].str.lower(), df['Answers']))

knowledge_base = load_knowledge_base()

# Query data model
class Query(BaseModel):
    query: str

# Custom LLM Class
class CustomLLM(LLM):
    model_name = MODEL_NAME

    def _call(self, prompt: str) -> str:
        p = f"Human: {prompt} Assistant: "
        llm = Llama(model_path=MODEL_PATH, n_threads=NUM_THREADS)
        try:
            output = llm(p, max_tokens=512, stop=["Human:"], echo=True)['choices'][0]['text']
            response = output[len(p):]
            return response
        except Exception as e:
            raise RuntimeError("Failed to process the LLM request.")

    @property
    def _identifying_params(self) -> Dict[str, Any]:
        return {"name_of_model": self.model_name}

    @property
    def _llm_type(self) -> str:
        return "custom"

llm = CustomLLM()

# API Endpoint for querying the chatbot
@app.post('/query')
async def handle_query(query: Query):
    user_input = query.query.lower()
    answer = knowledge_base.get(user_input)

    if answer:
        response = {"role": "assistant", "content": answer}
    else:
        try:
            response_text = llm._call(prompt=user_input)
            response = {"role": "assistant", "content": response_text}
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error processing your request")

    return JSONResponse(content=response)

# Running the FastAPI app with Uvicorn
if _name_ == "_main_":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)