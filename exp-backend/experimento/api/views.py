from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Experimento
from .serializer import ExperimentoSerializer

@api_view(['GET'])
def get_experimentos(request):
    experimento = Experimento.objects.all()
    serializedData = ExperimentoSerializer(experimento, many=True).data
    return Response(serializedData)

@api_view(['POST'])
def create_experimentos(request):
    data = request.data
    serializer = ExperimentoSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def experimentos_detail(request, pk):
    try:
        experimento = Experimento.objects.get(pk=pk)
    except Experimento.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        experimento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = ExperimentoSerializer(experimento, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)