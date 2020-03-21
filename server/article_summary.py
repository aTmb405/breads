import requests
from bs4 import BeautifulSoup
import sys
from dotenv import load_dotenv
from gensim.summarization import summarize

load_dotenv()

####################scraping code####################
# BASE_URL = sys.argv[1]
BASE_URL = 'https://www.artofmanliness.com/articles/sunday-firesides-build-your-life-upon-multiple-pillars-of-support/'
article = ''
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

def get_summary():
    summary = summarize(article, ratio=0.3)
    print(summary)
    print(len(summary))

get_article()
get_summary()