import os
import re
import csv
from pymongo import MongoClient
from pprint import pprint

csvDir = "../gosat-raw"
mongoCnx = "mongodb://localhost:27034"
client = MongoClient(mongoCnx)
db=client.gosat

for filename in os.listdir(csvDir):
    city = re.split(r'\d', filename)[0]
    city = re.split(r'_NIES_V', city)[0]
    with open(os.path.join(csvDir, filename), 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            row['city'] = city
            row['date'] = row.pop('##date')
            row['latitude'] = row.pop('latitudeOriginal[deg]')
            row['longitude'] = row.pop('longitudeOriginal[deg]')
            row['distance'] = row.pop('distance[km]')
            row['XCO2'] = row.pop('XCO2[ppmv]')
            row['XCH4'] = row.pop('XCH4[ppmv]')
            row['AOT1'] = row.pop('aerosolOpticalThickness(0.76)')
            row['AOT2'] = row.pop('aerosolOpticalThickness(1.6)')
            row['AOT3'] = row.pop('aerosolOpticalThickness(2.06)')
            result=db.entries.insert_one(row)
            pprint(result)
