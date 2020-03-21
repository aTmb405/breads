import requests
from bs4 import BeautifulSoup
import re
import mysql.connector as mysql
import sys
from dotenv import load_dotenv
import os
# from gensim.summarization import summarize

load_dotenv()

####################scraping code####################
BASE_URL = sys.argv[1]
# BASE_URL = 'https://www.artofmanliness.com/articles/sunday-firesides-build-your-life-upon-multiple-pillars-of-support/'
word_count = 0
article = ''
title = ''
author = ''
# domain = ''
response = requests.get(f'{BASE_URL}')
soup = BeautifulSoup(response.text, 'html.parser')

def get_article():
    paragraphs = soup.find_all('p')
    all_words = [tag.get_text().strip() for tag in paragraphs]
    # Filter out sentences that contain newline characters '\n' or don't contain periods.
    sentence_list = [sentence for sentence in all_words if not '\n' in sentence]
    sentence_list = [sentence for sentence in sentence_list if '.' in sentence]
    # Combine list items into string.
    global article
    article = ' '.join(sentence_list)
    print(article)

def get_word_count():
    # word_string = ''.join([str(word.get_text()) for word in article])
    global word_count
    # word_count = len(word_string)
    word_count = len(article)
    print(word_count)

def get_title():
    title_element = soup.find('h1')
    global title
    title = title_element.get_text()
    print(title)

def get_domain():
    domain = re.search(r'(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]', BASE_URL)
    global author
    author = domain.group()
    print(author)

# def get_summary():
#     summary = summarize(article, ratio=0.3)
#     print(summary)
#     print(len(summary))

# def get_author():
#     # pattern = re.compile(r'author')
#     global author
#     author = soup.find(class_ = 'author')
#     print(author.get_text())

get_article()
get_word_count()
get_title()
get_domain()
# get_summary()

###############connect to db###############

db = mysql.connect(
    host= os.getenv('HOST'),
    user= 'root',
    passwd= os.getenv('DBPASSWORD'),
    database= os.getenv('DB'),
    auth_plugin= os.getenv('AUTHPLUGIN')
)

cursor = db.cursor()

query = 'INSERT INTO info VALUES (%s, %s, %s, %s, %s)'
values = (0, BASE_URL, word_count, title, author)

cursor.execute(query, values)
db.commit()

print(cursor.rowcount, 'record inserted')