import random
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def greeting(request):
    foods = ['apple', 'banana', 'coconut',]
    info = {
        'name' : '똥혜지'
    }
    context = {
        'foods' : foods,
        'info' : info,
    }
    return render(request, 'greeting.html', context)

def dinner(request):
    foods = ['로제찜닭', '차슈덮밥', '스팸짜글이', '맛있는 라면']
    pick = random.choice(foods)
    context = {
        'pick' : pick,
        'foods' : foods,
    }
    return render(request, 'dinner.html', context)

def throw(request):
    return render(request, 'throw.html')

def catch(request):
    message = request.GET.get('message')
    context = {
        'message' : message,
    }
    return render(request, 'catch.html', context)

def hello(request, name):
    context = {
        'name': name,
    }
    return render(request, 'hello.html', context)