import re, io

src = io.open('assortment.txt', 'r', encoding='utf-8')
dst = io.open('parsed.txt', 'w', encoding='utf-8')
reps = set()

for line in src:
  line = re.sub("[^а-яА-ЯёЁ0-9( ]", "", line)
  item = re.search("[а-яА-ЯёЁ ]+", line)[0].strip()
  if (not item in reps and len(item) > 10):
    reps.add(item)
    dst.write(item + '\n')
