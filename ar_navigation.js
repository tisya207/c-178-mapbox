let coordinates= {}
$(document).ready(function (){
    get_coordinates()
})

function get_coordinates(){
    let parameters = new URLSearchParams(window.location.search)

    if(parameters.has("source") && parameters.has("destination")){
        let source = parameters.get("source")
        let destination = parameters.get("destination")
        
        coordinates.source_lat= source.split(";")[0]
        coordinates.source_lon= source.split(";")[1]

        coordinates.destination_lat= destination.split(";")[0]
        coordinates.destination_lon= destination.split(";")[1]

        console.log(coordinates.source_lat, coordinates.source_lon,coordinates.destination_lat, coordinates.destination_lon);

    }else{
        alert("Coordinates not selected");
        window.history.back();
    }
}