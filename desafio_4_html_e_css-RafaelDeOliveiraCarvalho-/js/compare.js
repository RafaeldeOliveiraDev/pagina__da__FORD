let carArr = [];

class Car{
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, carga, motor, potencia, volumeCacamba, roda, imagem){
        this.modelo = modelo
        this.preco = preco
        this.alturaCacamba = alturaCacamba
        this.alturaVeiculo = alturaVeiculo
        this.alturaSolo = alturaSolo
        this.carga = carga
        this.motor = motor
        this.potencia = potencia
        this.volumeCacamba = volumeCacamba
        this.roda = roda
        this.imagem = imagem
    }
}

function SetCarToCompare(input, car){

    if(input.checked == false){
        const carIndex = GetCarrArrPosition(car);
        carArr.splice(carIndex, 1);

        return;
    }
    if(carArr.length > 1){
        input.checked = false;
        alert('Não pode ter mais de dois carros selecionados');
        
        return;
    }
    carArr.push(car)
}

function GetCarrArrPosition(car){
    for(let i = 0; i < carArr.length; i++){
        if(carArr[i].modelo === car.modelo){
            return i;
        }
    }
      return -1;
}

function ShowCompare(){
     
    if(carArr.length !== 2){
        alert('O número de carros tem que ser 2.');
        return;
    }
    
    UpdateCompareTable();      

    document.getElementById('compare').style.display = 'block';
}

function UpdateCompareTable(){
    
    document.getElementById('compare_image_0').src = carArr[0].imagem;
    document.getElementById('compare_image_1').src = carArr[1].imagem;
    
    document.getElementById('compare_modelo_0').textContent = carArr[0].modelo
    document.getElementById('compare_modelo_1').textContent = carArr[1].modelo
   
    document.getElementById('compare_alturacacamba_0').textContent = carArr[0].alturaCacamba;
    document.getElementById('compare_alturacacamba_1').textContent = carArr[1].alturaCacamba;

    document.getElementById('compare_alturaveiculo_0').textContent = carArr[0].alturaVeiculo;
    document.getElementById('compare_alturaveiculo_1').textContent = carArr[1].alturaVeiculo;

    document.getElementById('compare_alturasolo_0').textContent = carArr[0].alturaSolo;
    document.getElementById('compare_alturasolo_1').textContent = carArr[1].alturaSolo;

    document.getElementById('compare_capacidadecarga_0').textContent = carArr[0].carga; 
    document.getElementById('compare_capacidadecarga_1').textContent = carArr[1].carga;
    
    document.getElementById('compare_motor_0').textContent = carArr[0].motor;
    document.getElementById('compare_motor_1').textContent = carArr[1].motor;
    
    document.getElementById('compare_potencia_0').textContent = carArr[0].potencia;
    document.getElementById('compare_potencia_1').textContent = carArr[1].potencia;
    
    document.getElementById('compare_volumecacamba_0').textContent = carArr[0].volumeCacamba;
    document.getElementById('compare_volumecacamba_1').textContent = carArr[1].volumeCacamba;
    
    document.getElementById('compare_roda_0').textContent = carArr[0].roda;
    document.getElementById('compare_roda_1').textContent = carArr[1].roda;
    
    document.getElementById('compare_preco_0').textContent = carArr[0].preco;
    document.getElementById('compare_preco_1').textContent = carArr[1].preco;

}

function HideCompare(){
    document.getElementById('compare').style.display = 'none';
}