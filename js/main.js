var pool_type = '';
var floor_type = '';
var pool_shape = '';
var dirt_and_debris = '';
var dimention = '';
const poolType = (obj) => {pool_type = $(obj).attr('data-attr');}
const floorType = (arg) => {floor_type = arg;}
const shapePool = (arg) => {pool_shape = arg;}
const dirtAndDebris = (arg) => {dirt_and_debris = arg;}
const getDimentions = (obj) => {
    dimention = $("#resolution-preview").val(); 
}

$("#submitForm").on('click',(e) => {
        e.preventDefault();
        $("#poolType").html(pool_type);
        $("#poolShape").html(floor_type);
        $("#poolCoverage").html(pool_shape);
        $("#poolControl").html(dirt_and_debris);
        $("#poolSize").html(dimention);

        if(pool_type == "Inground" && (floor_type == "Floor" || floor_type == "Floor and Walls" || floor_type == "Floor, Walls and Waterline") && (dirt_and_debris == "Large" || dirt_and_debris == "Small")){
            $(".dolphin_premier").removeClass("product");
            $(".dolphin_premier").find(".dolphin_premier_img").attr("src","Images/premier.jpg");

            $(".dolphin_sigma").removeClass("product");
            $(".dolphin_sigma").find(".dolphin_sigma_img").attr("src","Images/sigma.jpg");

            $(".dolphin_quantum").removeClass("product");
            $(".dolphin_quantum").find(".dolphin_quantum_img").attr("src","Images/quantum.jpg");
        }

        if(pool_type == "Above ground" && (floor_type == "Floor" || floor_type == "Floor and Walls" || floor_type == "Floor, Walls and Waterline") && (dirt_and_debris == "Large" || dirt_and_debris == "Small")){

            $(".dolphin_quantum").removeClass("product");
            $(".dolphin_quantum").find(".dolphin_quantum_img").attr("src","Images/quantum.jpg");
        }

        if(pool_type == "Inground" && (floor_type == "Floor" || floor_type == "Floor and Walls") && dirt_and_debris == "Large"){

            $(".dolphin_cayman").removeClass("product");
            $(".dolphin_cayman").find(".dolphin_cayman_img").attr("src","Images/cayman.jpg");
        }

        if(pool_type == "Above ground"){

            $(".dolphin_escape").removeClass("product");
            $(".dolphin_escape").find(".dolphin_escape_img").attr("src","Images/escape.jpg");
        }

        $('#product_list').find('.product').hide();
});


