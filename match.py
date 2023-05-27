import PyPDF2
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

import json
def extract_text_from_pdf(file_path):
    """
    Extracts text from a PDF file.
    """
    with open(file_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num] 
            text += page.extract_text()
        return text

def match_pdf_to_paragraphs(pdf_file, paragraphs):
    """
    Matches a PDF file to a set of paragraphs using cosine similarity.
    """
    pdf_text = extract_text_from_pdf(pdf_file)
    pdf_text = pdf_text.lower()
    vectorizer = TfidfVectorizer()
    paragraph_vectors = vectorizer.fit_transform(paragraphs)
    pdf_vector = vectorizer.transform([pdf_text])

    similarity_scores = cosine_similarity(pdf_vector, paragraph_vectors)

    #matched_paragraph_indices = similarity_scores.argmax(axis=1)

    #matched_paragraphs = [paragraphs[i] for i in matched_paragraph_indices]

    return similarity_scores

pdf_file_path = '/content/ULLAS U.pdf'



with open('/content/text.json', 'r') as f:
  json_data = json.load(f)

data = json_data['data']
paragraphs= []
for i in range(len(data)):
    paragraphs.append(data[i]['job_description']) 


    matched_paragraphs = match_pdf_to_paragraphs(pdf_file_path, paragraphs)

print("Matched paragraphs:")
for paragraph in matched_paragraphs:
    print(paragraph)