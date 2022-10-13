var pagosydevoluciones= angular.module('pagosydevoluciones', []);

pagosydevoluciones.controller('pagosController', function($scope){
     $scope.areas={
          options:[
           {id: '1',name:'Biblioteca'}, 
           {id:'2', name:'Taller'}, 
           {id:'3', name:'Laboratorio'},
          ],
          A_options:{id: '1',name:'Biblioteca'}, 
      };

      $scope.formato={
          options:[
               {id:'1', name:'--Selecciona el formato--'},
               {id:'2', name:'PDF'},
               {id:'3', name:'EXCEL'}
          ],
          A_options:{id: '1',name:'--Selecciona el formato--'},
      }
})
