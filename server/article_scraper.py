import requests
from bs4 import BeautifulSoup
import re
import mysql.connector as mysql
import sys
from dotenv import load_dotenv
import os

load_dotenv()

####################scraping code####################
BASE_URL = sys.argv[1]
word_count = 0
response = requests.get(f"{BASE_URL}")
soup = BeautifulSoup(response.text, "html.parser")

def get_word_count():
    article = soup.find_all("p")
    word_string = ''.join([str(word.get_text()) for word in article])
    global word_count
    word_count = len(word_string)
    print(word_count)

# def get_author():
#     pattern = re.compile(r"author")
#     author = soup.find(text = pattern)
#     print(author.get_text())

get_word_count()
# get_author()
title = ''
author = ''
###############connect to db###############

db = mysql.connect(
    host= os.getenv("HOST"),
    user= "root",
    passwd= os.getenv("DBPASSWORD"),
    database= os.getenv("DB"),
    auth_plugin= os.getenv("AUTHPLUGIN")
)

cursor = db.cursor()

query = "INSERT INTO info VALUES (%s, %s, %s, %s, %s)"
values = (0, BASE_URL, word_count, title, author)

cursor.execute(query, values)
db.commit()

print(cursor.rowcount, "record inserted")
