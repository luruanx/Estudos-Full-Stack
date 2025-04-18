import streamlit as st
from azure.storage.blob import BlobServiceClient
import os
import pymssql
import uuid
import json
from dotenv import load_doatenv
load_doatenv()

blobConnectionString = os.getenv('BLOB_CONNECTION_STRING')
blobContainerName = os.getenv('BLOB_CONTAINER_NAME')
blobAccountName = os.getenv('BLOB_ACCOUNT_NAME')

SQL_SERVER = os.getenv('SQL_SERVER')
SQL_DATABASE = os.getenv('SQL_DATABASE')
SQL_USER = os.getenv('SQL_USER')
SQL_PASSWORD = os.getenv('SQL_PASSWORD')

st.title('Cadastro de Produtos')

product_name = st.text_input('Nome do Produto')
product_price = st.number_input('Preço do Produto', min_value=0.0, format='%.2f')
product_description = st.text_area('Descrição do Produto')
product_image = st.file_uploader('Imagem do Produto', type=['jpg', 'png', 'jpeg'])

if st.button('Salvar Produto'):
    return_message = 'Produto salvo com sucesso'
    
st.header('Produtos Cadastrados')

if st.button('Listar Produtos'):
    return_message = 'Produtos Listados com Sucesso'