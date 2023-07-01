var pool_type = '';
var floor_type = '';
var pool_shape = '';
var dirt_and_debris = '';
var dimension = '';
const poolType = (obj) => {pool_type = $(obj).attr('data-attr');}
const floorType = (arg) => {floor_type = arg;}
const shapePool = (arg) => {pool_shape = arg;}
const dirtAndDebris = (arg) => {dirt_and_debris = arg;}
const getDimensions = (obj) => {
    dimension = $("#resolution-preview").val();
}

$("#submitForm").on('click',(e) => {
        e.preventDefault();
        $("#poolType").html(pool_type);
        $("#poolShape").html(floor_type);
        $("#poolCoverage").html(pool_shape);
        $("#poolControl").html(dirt_and_debris);
        $("#poolSize").html(dimension);

        $('#product_list').children('.col-md-3').removeClass('product')
        $('#product_list').children('.col-md-3').addClass('product')
        $('#product_list').children('.col-md-3').attr('style', '')

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
        var products = [];
        var i = 0;
        let productName =$("#product_list").children('.col-md-3').not('.product');
        $(productName).each(function() { 
            products[i] = $(this).attr("data-attr");
            i++;
        });

        var userIP;
        $.ajax({
            url: "http://jsonip.com",
            async: false,
            dataType: "json",
            success: function (data) {
                userIP = data.ip;
            }
        });
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        date = month + "/" + day + "/" + year;
        let formData = {
            "Date" : date,
            "IP Address" : userIP,
            "Inground or Above" : pool_type,
            "Shape" : pool_shape,
            "Max Dimention" : dimension,
            "Capability (Floor Wall Waterline) " : floor_type,
            "Dirt Type" : dirt_and_debris,
            "Recommended Units" : products.toString(),
         }
        jQuery.ajax({
			url:'https://script.google.com/macros/s/AKfycbw8RDNvr-qF8M84e0bPSo5789Uca41Wss8pPlekuk3eBwj94x33nhcC56kVpDtWMXevtA/exec',
			type:'post',
			data:formData,
			success:function(result){
                console.log('respo++++');
                console.log(result);
			}
		});
});