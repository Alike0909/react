from pytube import YouTube
link = input("Enter url: ")
video = YouTube(link)
stream = video.streams.get_highest_resolution()
stream.download()