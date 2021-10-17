from django.shortcuts import render, redirect
from .Forms import form_diarista

# Create your views here.
from .models import Diaristas


def cadastrar_diarista(request):
    if request.method == "POST":
        diarista_form = form_diarista.DiaristaForm(request.POST, request.FILES)
        if diarista_form.is_valid():
            diarista_form.save()
            return redirect('listar_diaristas')
    else:
        diarista_form = form_diarista.DiaristaForm()
    return render(request, 'form_diarista.html', {'diarista_form': diarista_form})

def listar_diaristas(request):
    diaristas = Diaristas.objects.all()
    return render(request, 'lista_diaristas.html', {'diaristas':diaristas})

def editar_diarista(request, diarista_id):
    diarista = Diaristas.objects.get(id=diarista_id)
    if request.method == "POST":
        diarista_form = form_diarista.DiaristaForm(request.POST or None, request.FILES, instance=diarista)
        if diarista_form.is_valid():
            diarista_form.save()
            return redirect('listar_diaristas')
    else:
        diarista_form = form_diarista.DiaristaForm(instance=diarista)
    return render(request, 'form_diarista.html', {'diarista_form': diarista_form})


def remover_diarista(request, diarista_id):
    diarista1 = Diaristas.objects.get(id=diarista_id)
    diarista1.delete()
    return redirect('listar_diaristas')