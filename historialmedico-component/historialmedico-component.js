var historial = angular.module('historial', []); 

historial.controller('historialController', function($scope){
     $scope.parentesco={
          options:[
           {id: '1', name:'Padre'},
           {id: '2', name:'Madre'},
           {id: '3', name:'Hermano'}, 
           {id: '4', name:'Hermana'},
           {id: '5', name:'Tio'},
           {id: '6', name:'Tia'},
           {id: '7', name:'Abuelo'},
           {id: '8', name:'Abuela'},
           {id: '9', name:'Primo'},
           {id: '10', name:'Prima'},
           {id: '11', name:'Tutor'},
           {id: '12', name:'Tutora'} 
          ],
          A_options:{id:'1', name:'Padre'}
      };

      $scope.parentesco2={
          options:[
           {id: '1', name:'Madre'},
           {id: '2', name:'Padre'},
           {id: '3', name:'Hermano'}, 
           {id: '4', name:'Hermana'},
           {id: '5', name:'Tio'},
           {id: '6', name:'Tia'},
           {id: '7', name:'Abuelo'},
           {id: '8', name:'Abuela'},
           {id: '9', name:'Primo'},
           {id: '10', name:'Prima'},
           {id: '11', name:'Tutor'},
           {id: '12', name:'Tutora'} 
          ],
          A_options:{id:'1', name:'Madre'}
      };

      $scope.trabaja={
          options:[
               {id:'1', name:'No'}, 
               {id:'2', name:'Si'},
          ],
          A_options:{id:'1', name:'No'}
      };

      $scope.depende={
          options:[
               {id:'1', name:'Padres'}, 
               {id:'2', name:'Cónyuge'},
               {id:'3', name:'Otro'},
          ],
          A_options:{id:'1', name:'Padres'}
      }

      $scope.profesiones={
          options:[
               {id:'1', name:'Servicio público'},
               {id:'2', name:'Empleado de empresa particular'}, 
               {id:'3', name:'Profesion u oficios por su cuenta'},
               {id:'4', name:'Comerciante o industrial'},
               {id:'5', name:'Marino o militar'},
               {id:'6', name:'Agricultor, ganadero, campesino o pescador'},
               {id:'7', name:'Obrero'},
               {id:'8', name:'Otro'}
          ],
          A_options:{id:'1', name:'Profesion u oficios por su cuenta'}
      };

      $scope.protegido={
          options:[
               {id:'1', name:'No'}, 
               {id:'2', name:'Si'},
          ],
          A_options:{id:'1', name:'No'}
      };

      $scope.seguros={
          options:[
               {id:'1', name:'IMSS'},
               {id:'2', name:'Seguro social'}, 
               {id:'3', name:'ISSSTE'},
               {id:'4', name:'Secretaria de salud (seguro popular)'},
               {id:'5', name:'Secretaria de defensa nacional'},
               {id:'6', name:'Pemex'},
               {id:'7', name:'Institución nacional de creditos'},
               {id:'8', name:'Secretaria de marina'},
               {id:'9', name:'Ninguna'}
          ],
          A_options:{id:'1', name:'IMSS'},
      };

      //second modal dialog

      $scope.typeblood={
        options: [
            {id:'1', name:'+AB'}, 
            {id:'2', name:'-AB'},
            {id:'3', name:'+A'},
            {id:'4', name:'-A'},
            {id:'5', name:'+B'},
            {id:'6', name:'-B'},
            {id:'7', name:'+O'},
            {id:'8', name:'-O'} 
        ],
        A_options:{id:'1', name:'+A'},
      };

      $scope.lowvision={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.motordisability={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.useofprothesesy={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.useofglasses={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };
    

     $scope.Overweight={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.hearingimpairment={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

     $scope.Epilepsy={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.Diabetes={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.Hypertension={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };
    
     $scope.learningdisabilities={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

      $scope.Flatfoot={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

     $scope.TreatmentMedical={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };


     $scope.Allergies={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

    $scope.outstanding={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };

     $scope.sport={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        }; 

     $scope.children={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };      

    $scope.toast_first_auxiliaries={
        options:[            
            {id:'1', name:'No'},
            {id:'2', name:'Si'}
        ],
        A_options:{id:'1', name:'No'},
        };
});

