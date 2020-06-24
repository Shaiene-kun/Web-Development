//jQuery Code

$(document).ready( () => { $("#cepTable").hide() })
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
                {name:"brCep", addr: response.cep},
                {name:"brStreet", addr: response.logradouro}, 
                {name:"brNeighborhood", addr: response.bairro}, 
                {name:"brCity", addr: response.localidade},
                {name:"brState", addr: response.uf} 
            ]
            for (part of address) 
            {
                $("#"+part.name).text(part.addr) 
            }
            $("#cepTable").show()
        }
    })
    
}
