import requests
import json
t = 'https://api.jikan.moe/v4/anime/'
inp = input('Enter Anime Id')
id = t + inp
x = requests.get(id)

 
Title = json.loads(x.text)['data']['titles'][3]['title']
print(Title)
5