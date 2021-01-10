filePath = " " #insert file path
f = open(filePath, "a")
f.write('{ "object":[')
while(True):
	word = input("word: ")
	if(word=="0"):
		f.write("]}")
		f.close()
		break
	meaning = input("meaning: ")
	f.write("{ \n")
	f.write('"word":')
	f.write('"')
	f.write(word)
	f.write('"')
	f.write(",\n")
	f.write('"meaning":')
	f.write('"')
	f.write(meaning)
	f.write('"')
	f.write("},\n")

