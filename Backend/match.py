import PyPDF2
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json
from typing import List


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

    return similarity_scores


def sort_job_descriptions_by_match_value(pdf_file_path: str, text_json_file_path: str) -> List[dict]:
    """
    Sorts job descriptions in text.json file by descending order of their corresponding match value with PDF file.
    Returns a list of dictionaries containing sorted job descriptions.
    """

    with open(text_json_file_path, 'r', encoding='utf-8') as f:
        json_data = json.load(f)

    data = json_data['data']

    paragraphs = [item['job_description'] for item in data]

    similarity_scores = match_pdf_to_paragraphs(pdf_file_path, paragraphs)

    job_similarity_list = [(data[i]['job_description'], similarity_scores[0][i]) for i in range(len(data))]

    sorted_job_similarity = sorted(job_similarity_list, key=lambda x: x[1], reverse=True)

    sorted_data = []
    for job, score in sorted_job_similarity:
        for item in data:
            if item['job_description'] == job:
                item['similarity_score'] = score
                sorted_data.append(item)
                break

    json_data['data'] = sorted_data

    with open(text_json_file_path, 'w', encoding='utf-8') as f:
        json.dump(json_data, f)

    with open('order.json', 'w', encoding='utf-8') as f:
        json.dump(sorted_data, f)

    return sorted_data


def main():
    pdf_file_path = 'Rezume1.pdf'
    text_json_file_path = 'text.json'

    sorted_job_descriptions = sort_job_descriptions_by_match_value(pdf_file_path, text_json_file_path)

    print('Job descriptions have been sorted by their match value and saved to order.json.')


if __name__ == '__main__':
    main()
