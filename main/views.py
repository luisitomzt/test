from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Permission, User

from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

import json


myToken='vacio'


def index(request):
    
    return render(request, 'index.html')
@csrf_exempt
def my_login(request):
    print ('entre viejon')
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    username = body['username']
    password = body['password']
    
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        return HttpResponse(request)
        
    else:
        # Return an 'invalid login' error message.
        return HttpResponse(request)

def my_logout(request):
    logout(request)
    return HttpResponse(request)


def online(request):
    if request.user.is_authenticated:
        print('sesion iniciada')
    else:
        print("aun nada")
    return HttpResponse(request)
    
@login_required
def protectedview(request):
    return render(request, 'example.html')
