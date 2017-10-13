(function(){
  new Vue({
            el:'#app',
            data:{
                in_a:"",
                in_b:"",
                in_c:"",
                in_x0:0,
                param_a: 'a',
                param_b: 'b',
                param_c: 'c',
                param_x0:'',
                verTabla: false,
                datos: [],
                periodo:0
            },
            methods:{
               filtrar_a:function(){
                console.log("hay evento");
                if( this.validateParam(this.in_a)){
                    this.param_a = Number(this.in_a);
                    this.crearTabla();
                    
                }else{
                    this.in_a = "";
                    this.param_a = 'a';
                    console.log("no es valido a");
                    this.datos = [];
                }
               },
               filtrar_b:function(){
                console.log("hay evento");
                if(this.validateParam(this.in_b)){
                    this.param_b = Number(this.in_b);
                    this.crearTabla();
                }else{
                    this.in_b = "";
                    this.param_b = 'b';
                    this.datos = [];
                }
               },
               filtrar_c:function(){
                console.log("hay evento");
                if( this.validateParam(this.in_c)){
                    this.param_c = Number(this.in_c);
                    this.crearTabla();
                }else{
                    this.in_c = "";
                    this.param_c = 'c';
                    this.datos = [];
                }
               },
               filtrar_x0:function(){
                if(this.validateNumber(this.in_x0)){
                    this.param_x0 = Number(this.in_x0);
                    this.crearTabla();
                }else{
                    this.in_x0 = 0;
                    this.param_x0 = 0;
                    this.datos = [];
                }
               },
               crearTabla : function(){
                   this.datos = [];
                   if(this.validateParam(this.in_a) && this.validateParam(this.in_b) && this.validateParam(this.in_c) && this.validateNumber(this.in_x0)){
                       this.verTabla = true;
                        
                       console.log("dibujamos tabla");
                       let x0 = Number(this.param_x0);
                       let first_num = 0;
                       for(let i = 0; i < 10; i++){
                            let row = {};
                            row.index = i;
                            row.xn = Number(x0);
                            row.axn = Number(this.param_a) * row.xn;
                            row.axnc = row.axn + Number(this.param_b);
                            row.xn1 = row.axnc % Number(this.param_c);
                            
                            row.un = row.xn1 / this.param_c;
                            console.log(i,row.xn, row.axn, row.axnc, row.xn1, row.un); 
                            x0 = row.xn1;    
                            this.datos.push(row);

                            if( i == 0){
                                first_num = row.xn1;
                            }else{
                                if(row.xn1 == first_num){
                                    break;
                                }
                            }
                            
                        }
                    }else{
                       this.verTabla =false;
                       this.datos = [];
                       console.log("quitamos la tabla");
                    } 
                    
               },
               validateNumber: function(n){
                   if(Number(n) != NaN){
                       return true;
                   }else{
                       return false;
                   }
               },
               validateRange: function(n){
                 n = Number(n);
                 if(  n > 0 && n <30000){
                     return true;
                 }else{
                     return false;
                 }
               },
               validateParam:function(n){
                   if(this.validateNumber(n) && this.validateRange(n)){
                       return true;
                   }else{
                       return false;
                   }
               }
            }
        })  
})();