from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from bson.json_util import dumps
import json
from sklearn.preprocessing import StandardScaler
import pandas as pd
import tensorflow as tf

app = FastAPI()

# Database configuration
client = MongoClient("localhost", 27017)
db = client['Paras']
collection = db['prediction']

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = MongoClient("localhost", 27017)
    app.mongodb = app.mongodb_client['Paras']

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/documents/")
async def read_documents():
    try:
        documents = list(app.mongodb['prediction'].find({}))
        return predict_and_update(documents)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def predict_and_update(documents):
    df = pd.DataFrame(documents)
    df.pop("_id")
    session_ids = df['session_id']
    features = df[df.columns.difference(['session_id', 'mental_state'])]

    # Load the previously saved scaler
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(features)

    # Load the trained modelS
    loaded_model = tf.keras.models.load_model("mental_health_model.h5")
    predictions = loaded_model.predict(scaled_features)

    # Update predictions in the database
    for session_id, prediction in zip(session_ids, predictions):
        app.mongodb['prediction'].update_one(
            {"session_id": session_id},
            {"$set": {"mental_state": prediction.tolist()}}
        )

    return {"message": "Predictions updated successfully"}

