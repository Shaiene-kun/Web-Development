//jQuery Code

function ajaxCep() //Getting CEP info
{
    var cep = $("#inputCEP").val() //USing the number the user inputs
    $.ajax
    ({
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response)
        {
            //Adding parts of the address into an ul            
            var address =
            [ 
                {name:"CEP", addr: response.cep},
                {name:"Street", addr: response.logradouro}, 
                {name:"Neighborhood", addr: response.bairro}, 
                {name:"City", addr: response.localidade},
                {name:"State", addr: response.uf} 
            ]
            $("#CEP").append('<ul')
            for (part of address) 
            {
                $("#CEP").append( ()=>
                {             
                    return $("<li></li>").text(part.name+": "+part.addr) 
                })
            }
            $("#CEP").append("</ul>")        
        }
    })
    
}
