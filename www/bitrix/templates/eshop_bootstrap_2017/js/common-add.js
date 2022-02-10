// old
//    URI      http://medialize.github.io/URI.js/docs.html 
if (typeof console === "undefined") {
	console = {};
	console.log = function() {
		return;
	};
}
String.prototype.contains = function(it) {
	return this.indexOf(it) != -1;
};
String.prototype.fulltrim = function() {
	return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '')
			.replace(/\s+/g, ' ');
};
// ===========================================================================================================================

$.expr[':'].textEquals = $.expr.createPseudo(function(arg) {
	return function(elem) {
		return $(elem).text().match("^" + arg + "$");
	};
});
// ===========================================================================================================================
function ClassesList() {
	Cl_man_basketItemgetQuantity = 0;

	Cl_man_ymaps_subdomains = 0;
	Cl_man_subdomains = 0;
	Cl_man_subscription = 0;
	Cl_man_cat_page_btns_nav = 0;
	Cl_man_cat_page_btns_view = 0;
	Cl_man_comments = 0;
	Cl_man_diski_zero = 0;
	Cl_man_filter_Seo = 0;
	Cl_man_filter_mob = 0;
	Cl_man_location_user = 0;
	Cl_man_orientationchange = 0
	Cl_man_partner = 0;
	Cl_man_partner_reg = 0;
	Cl_man_row_order = 0;
	Cl_man_uri = 0;
	Cl_manTSENOVOY_SEGMENT = 0;
	Cl_man_list_brends = 0;
	Cl_man_sizes_popul = 0;
	Cl_mainPageSpeed = 0;
	Cl_man_FilterSliderPrice = 0;
}

WhatsApp_rostov = "89185809919";

var is_click_btn_to_cart = 0;
var quantityToBasket_G = 0;
var quantityT_G = '';
var priceT_G = '';

var subdomain = '';
var http_loc = 'asia-tires.ruloc';
var http_loc_full = 'www.asia-tires.ruloc';
var http_loc2 = 'asia-tires.ruloc2';
var http_loc_full2 = 'www.asia-tires.ruloc2';

var is_http_loc = false;
var resol = "";
var widthG = 0;
var heightG = 0;

var vSign = ' <span class="rub_hidden">руб.</span><span style="font-family: als_rublregular;">a</span>';
var vSignRu = 'РЎР‚РЎС“Р В±.';
var quantity_popul_prods = 1;
var uri = "";
var result_uri_vars = "";
var isLoading = false;
var isLoadingSh = false;
var isPageMain = false;
var isHome_diski = false;
var isPageCat = false;
var isPageCatWheels = false;

var carG = "";
var modelG = "";
var yearG = "";
var modificationG = "";
var type_filterG = "";
var template_filters_form_autoG = "";
var url_carG = false;

var stringQueryOutForFilter_by_carG = "";
var isNewCarG = false;
var num_auto_list_ansCur = -1;

var isVis_menuVertical = false;

var dir_malotonazhnye_shiny = "malotonazhnye_shiny";
var dir_legkovye_shiny = "legkovye_shiny";
var path_legkovye_shiny = "/catalog/legkovye_shiny/";
var path_shiny = "/catalog/shiny/";
var path_wheels = "/wheels/diski/";//
var isPropagationStoppedG = false;

var location_user_city = "";

var vCl_man_uri = null;
var vCl_manTSENOVOY_SEGMENT = null;
var vCl_man_FilterSliderPrice = null;

var vCl_man_cat_page_btns_view = null;
var vCl_man_cat_page_btns_nav = null;
var vCl_man_partner = null;

var vCl_man_partner_reg = null;
var vCl_man_row_order = null;
var vCl_man_subdomains = null;
var vCl_man_ymaps_subdomains = null;

var vCl_man_location_user = null;
var vCl_man_filter_Seo = null;
var vCl_man_filter_mob = null;
var vCl_man_diski_zero = null;
var vCl_man_orientationchange = null;
var vCl_man_subscription = null;

var vCl_man_comments = null;
var vCl_man_list_brends = null;
var vCl_man_sizes_popul = null;

var suf_ax_prod = "qq";
var prefIDcur = "popul_prod";

var prod_css = ".popul_prod";

var css_wr_mark_price_mul = ".popul_prod_line5-acia";
var vCl_mainPageSpeed = null;

// ===========================================================================================================================
function f_JS_CALLBACK() {
	console_logM("f_JS_CALLBACK st");
	var LOCATION = $('.row_note_t #loc_n').val();
	// if (LOCATION == "undefined")
	if (typeof LOCATION === "undefined")
		LOCATION = $('.row_note_t2 #loc_n').val();
	console_logM("f_JS_CALLBACK LOCATION");
	console_logM(LOCATION);
	if (LOCATION == "") {
		// alert("Местоположение, пожалуйста, укажите. ");
		return false;
	}

	// #bx-soa-region input name ORDER_PROP_6
	jQuery("#bx-soa-region input[name=ORDER_PROP_6]").val(LOCATION);
	jQuery("#bx-soa-region input[name=ORDER_PROP_18]").val(LOCATION);
	jQuery("#bx-soa-region input.bx-ui-sls-route").val(LOCATION + LOCATION);
	jQuery("#bx-soa-region input.bx-ui-sls-fake").val(LOCATION);

	jQuery("#bx-soa-region-hidden input[name=ORDER_PROP_6]").val(LOCATION);
	jQuery("#bx-soa-region-hidden input[name=ORDER_PROP_18]").val(LOCATION);
	jQuery("#bx-soa-region-hidden input.bx-ui-sls-route").val(
			LOCATION + LOCATION);
	jQuery("#bx-soa-region-hidden input.bx-ui-sls-fake").val(LOCATION);

	var zip = $('#input_index').val();
	if (zip == "")
		zip = 0000000;
	jQuery("#bx-soa-region input[name=ORDER_PROP_4]").val(zip);
	jQuery("#bx-soa-region input[name=ORDER_PROP_16]").val(zip);

	jQuery("#bx-soa-region-hidden input[name=ORDER_PROP_4]").val(zip);
	jQuery("#bx-soa-region-hidden input[name=ORDER_PROP_16]").val(zip);

}

// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_basketItemgetQuantity
var Cl_man_basketItemgetQuantity = function() {// 12-07-201816:14
	if (jQuery("body").has(".form_order_data_user").length) {
		this.init();
	}
}

// ===========================================================================================================================
Cl_man_basketItemgetQuantity.prototype.init = function() {
	console_logM("init init st");
	this.initElem();
	this.initElemPartner();
}

// ===========================================================================================================================
Cl_man_basketItemgetQuantity.prototype.initElemPartner = function() {
	console_logM("initElemPartner init st");
	var th = this;
	var btn_row_buy = this.man_partner_btn_row_buy_frame();
	$('.input_QUANTITY')
			.each(
					function(index) {
						// $(this).focusout(function() {// 18-10-201820:11
						$(this).focusin(function() {
							quantityToBasket_G = $(this).val();
						});

						$(this)
								.focus(
										function(e) {
											console
													.log("input_QUANTITY focus ");
											var th_input = this;
											$(this).parent().append(
													$(btn_row_buy));

											$(this)

													.parent()
													.find('.btn_row_buy')
													.click(
															function(e) {
																console_logM("click btn_row_buy ");
																var id_item = $(
																		this)
																		.parent()
																		.find(
																				'.input_QUANTITY')
																		.attr(
																				"id-item");
																var val = $(
																		this)
																		.parent()
																		.find(
																				'.input_QUANTITY')
																		.val();
																var ans = vCl_man_partner
																		.can_partner_basket_add(
																				$(
																						this)
																						.parent()
																						.find(
																								'.input_QUANTITY'),
																				0);
																if (ans)
																	th
																			.initUpdate(
																					id_item,
																					val);
																e
																		.preventDefault();
																return false;
															});

										});
					});
}
// ===========================================================================================================================
Cl_man_basketItemgetQuantity.prototype.man_partner_btn_row_buy_frame = function() {
	var btn_row_buy = '<div class="wr-button btn_row_buy">';// btn-basket.png
	// refresh.png
	btn_row_buy += '<button class="btn btn-default btn-to-cart" type="button"  title="Обновить корзину" >';
	btn_row_buy += '<img src="/bitrix/templates/eshop_bootstrap_2017/img/refresh.png" alt="">';
	btn_row_buy += '</button>';
	btn_row_buy += '</div>';
	return btn_row_buy;
}

// ===========================================================================================================================
Cl_man_basketItemgetQuantity.prototype.initElem = function() {
	console_logM("initElem init st");// 04-09-201919:43
	var th = this;
	$(
			'.quantity-select,.p_num.crt .styled-select,.row_order_b_left .styled-select')
			.each(
					function(index) {
						$(this)
								.change(
										function(e) {
											console
													.log("initElem price_quantity_container_popul select 111");
											th.initUpdate($(this).attr(
													"id-item"), $(this).val());
										});
					});

}
// ===========================================================================================================================
Cl_man_basketItemgetQuantity.prototype.initUpdate = function(countbasketid,
		countbasketcount) {
	console_logM("initUpdate init st");
	console_logM('ajaxbasketcountid=' + countbasketid + '&ajaxbasketcount='
			+ countbasketcount);
	// return;
	$
			.ajax({
				type : "POST",
				// url :
				// "/include/ajax/basket.php",//_marker_t29_05_20209_24=1;//29-05-20209:24
				url : "/include/ajax/basketN.php",// _marker_t29_05_20209_24=1;//29-05-20209:24
				data : 'ajaxaction=update&ajaxbasketcountid=' + countbasketid
						+ '&ajaxbasketcount=' + countbasketcount,
				dataType : "html",
				beforeSend : function() {
					setTimeout(
							function() {
								console_logM("Cl_man_basketItemgetQuantity initUpdate PopupWindowManager");
								document.getElementById("hellopreloader").style.display = "block";
								document
										.getElementById("hellopreloader_preload").style.display = "block";
							}, 500);

				},
				success : function() {
					console_logM("initUpdate success");
					// $(wherecontent).html(fillter);
					location.reload();
				}
			});

	return;
	var parts = {
		protocol : SITE_pref,
		username : null,
		password : null,
		hostname : uri.hostname(),
		port : null,
		path : "/" + uri.pathname(),
		query : "q=1",
		fragment : null
	};
	var uriL = URI.build(parts);
	console_logM("initUpdate uriL");
	console_logM(uriL);
	// document.location.href = uriL;// d--

}
// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_ymaps_subdomains
var Cl_man_ymaps_subdomains = function() {// 11:3411-08-2018
	this.city_cook = "city_cook";
	this.ar_coords_subdomains = new Object();
	// var o = new Object();
	this.init();
}
// ===========================================================================================================================
Cl_man_ymaps_subdomains.prototype.init = function() {
	console_logM("Cl_man_ymaps_subdomains init st");

	this.ar_coords_subdomains = acs;
}
// ===========================================================================================================================
Cl_man_ymaps_subdomains.prototype.get_coords_user = function(location_user_city) {
	th = this;
	if (is_http_loc) {
		coords = 0;
		th.get_city_near(0);
		return;
	}

	var myGeocoder = ymaps.geocode(location_user_city, {
		/**
		 * Опции запроса
		 * 
		 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
		 */
		results : 1
	});
	myGeocoder.then(function(res) {
		// Выбираем первый результат геокодирования.
		var firstGeoObject = res.geoObjects.get(0),
		// Координаты геообъекта.
		coords = firstGeoObject.geometry.getCoordinates();
		console_logM("init_maps  coords");
		console_logM(coords);
		th.get_city_near(coords);
	}, function(err) {
		// обработка ошибки
		console_logM("get_coords_user  err----------");
	});
}
// ===========================================================================================================================
// Определить ближайший город из городов для доменов

Cl_man_ymaps_subdomains.prototype.get_city_near = function(coords) {
	console_logM("Cl_man_ymaps_subdomains get_city_near st");
	console_logM("Cl_man_ymaps_subdomains get_city_near this.ar_coords_subdomains");
	console_logM(this.ar_coords_subdomains);
	th = this;
	var arr = this.ar_coords_subdomains;
	nameCityNear = ""
	RastoCityNear = ""
	if (is_http_loc) {
		nameCityNear = "samara";
	} else

		$.each(arr, function(key, value) {
			if (nameCityNear == "")
				nameCityNear = key;
			Rasto = th.DistanceGeoCoordSystem(coords[0], coords[1], value[0],
					value[1])
			Rasto /= 1000
			if (RastoCityNear == "")
				RastoCityNear = Rasto;
			if (Rasto < RastoCityNear) {
				nameCityNear = key;
				RastoCityNear = Rasto;
			}
			console_logM("Cl_man_ymaps_subdomains get_city_near " + key + "="
					+ Rasto);

		});

	console_logM("  get_city_near nameCityNear=" + nameCityNear);
	console_logM(" get_city_near RastoCityNear=" + RastoCityNear);
	$.cookie('nameCityNear', nameCityNear, {
		expires : 30,
		path : '/'
	});
	var subdomain_pref_link = nameCityNear + ".";
	if (nameCityNear == "krasnodar")
		subdomain_pref_link = "";
	var parts = {
		protocol : SITE_pref,
		username : null,
		password : null,
		// hostname : "www." + nameCityNear + "." + uri.domain(true),
		hostname : subdomain_pref_link + uri.domain(true),
		port : null,
		path : uri.pathname(),
		query : this.city_cook + "="
				+ encodeURI(vCl_man_location_user.location_user_city),
		fragment : null
	};
	var uriL = URI.build(parts);
	console_logM("  get_city_near uriL=" + uriL);
	document.location.href = uriL;
	console_logM("Cl_man_ymaps_subdomains get_city_near fin");
}
// ===========================================================================================================================
Cl_man_ymaps_subdomains.prototype.DistanceGeoCoordSystem = function(lat1, lng1,
		lat2, lng2) {
	Rasto = ymaps.coordSystem.geo.getDistance([ lat1, lng1 ], [ lat2, lng2 ]);
	return Rasto;
}

// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_subdomains
var Cl_man_subdomains = function() {// 10-07-20189:28
	this.init();
	this.subdomain = "";
}
// ===========================================================================================================================
Cl_man_subdomains.prototype.init = function() {
	console_logM("Cl_man_subdomains init st");
	this.init_links();
	this.set_cur_subdomain();
	this.man_menu();

	if (jQuery("body").has(".row_order,#bx-soa-order-form").length) {

		var th = this;
		setTimeout(function() {
			th.init_pay_nalichnymi_kuryeru();// 26-07-201815:15
		}, 1000);

		// this.init_pay_nalichnymi_kuryeru();// 26-07-201815:15
	}
	this.init_phone_subdomain();// 14:5913-08-2018
	this.man_subdomains_filter();// 10-10-201816:52

}
// ===========================================================================================================================
Cl_man_subdomains.prototype.man_subdomains_filter = function() {
	console_logM("Cl_man_subdomains man_subdomains_filter st");
	data_href = uri.search(true);
	console.log(data_href);
	$.each(data_href, function(key, value) {
		// if (nameCityNear == "")nameCityNear = key;
		console.log('man_subdomains_filter   Свойство: ' + key + '; Значение: '
				+ value);
		expr1 = "sklad_";
		var ans1T = key.contains(expr1);
		console.log("man_subdomains_filter ans1T=" + ans1T);
		if (ans1T && value == 1) {
			console_logM("man_subdomains_filter checked+++++++++  ");
			$("input[type=checkbox] [name=" + key + "]").prop("checked", true);
			// $(" [name=" + key + "]").prop("checked", true);
			$(" [name=" + key + "]").attr("checked", 1);
			$(" [name=" + key + "]").val(1);

		}
	});
	$("input[type=checkbox][name^=sklad_]")
			.each(
					function(index) {
						console_logM("man_subdomains_filter index " + index);
						$(this)
								.change(
										function() {
											console_logM("man_subdomains_filter this.checked= "
													+ this.checked);
											nameL = $(this).prop("name");
											if ($(this).is(":checked")) {
												// $(this).val(1);
												$(" [name=" + nameL + "]").val(
														1);
												console_logM("man_subdomains_filter this.checked= "
														+ this.checked);
												if (nameL != "sklad_all") {
													$(
															"input[type=checkbox][name=sklad_all]")
															.prop('checked',
																	false);
													$("[name=sklad_all]")
															.val(0);
												}
											} else {
												// $(this).val(0);
												$(" [name=" + nameL + "]").val(
														0);
												console_logM("man_subdomains_filter this.checked= "
														+ this.checked);
											}
											// $(this).val(
											// this.checked ? "1" : "0");
											console_logM("man_subdomains_filter $(this).val()= "
													+ $(this).val());
										});

					});
	$("input[type=checkbox][name=sklad_all]")
			.change(
					function() {
						if ($(this).is(":checked")) {
							$("input[type=checkbox][name^=sklad_]")
									.each(
											function(index) {
												nameL = $(this).prop("name");
												if (nameL != "sklad_all") {
													console_logM("man_subdomains_filter sklad_all each name= "
															+ nameL);
													$(this).prop('checked',
															false);
													$(" [name=" + nameL + "]")
															.val(0);
													vL = $(
															"input[type=checkbox][name="
																	+ nameL
																	+ "]").is(
															":checked")
													console_logM("man_subdomains_filter sklad_all each vL= "
															+ vL);

												}
											});
						}
					});
	this.man_a_reset_filter()
	console_logM("Cl_man_subdomains man_subdomains_filter end");

}
// ===========================================================================================================================
// man data input[type=checkbox][name^=sklad_]

Cl_man_subdomains.prototype.man_path_filter = function(pathM) {
	path_filter = "";
	path_filter = "man_path_filter";
	var uriL = new URI(pathM);
	console_logM("man_path_filter st uriL.href() " + uriL.href());
	$("input[type=checkbox][name^=sklad_]").each(function(index) {
		console_logM("man_path_filter index " + index);
		console_logM("man_path_filter name " + $(this).prop("name"));
		if (!$(this).is(":checked")) {
			uriL.removeSearch($(this).prop("name"));
			console_logM("man_path_filter this.checked= " + this.checked);
		}
	});
	path_filter = uriL.href();
	console_logM("man_path_filter path_filter " + path_filter);

	return path_filter;
}
// ===========================================================================================================================
Cl_man_subdomains.prototype.man_a_reset_filter = function() {
	console_logM("Cl_man_subdomains man_a_reset_filter st");

	$('.a_reset_filter').click(function(e) {
		console_logM("Cl_man_subdomains man_a_reset_filter work");
		var parts = {
			protocol : SITE_pref,
			// username : null,
			// password : null,
			hostname : uri.hostname(),
			// port : null,
			// path : uri.pathname(),
			path : uri.segment(0) + "/" + uri.segment(1) + "/",
		// query : null,
		// fragment : null
		};
		console_logM("Cl_man_subdomains man_a_reset_filter parts");
		console_logM(parts);
		var uriL = URI.build(parts);
		console_logM("man_a_reset_filter uriL");
		console_logM(uriL);
		document.location.href = uriL;
	});

}
// ===========================================================================================================================
Cl_man_subdomains.prototype.init_phone_subdomain = function() {
	console_logM("Cl_man_subdomains init_phone_subdomain st");
	var th = this;
	// krasnodar
	// rostov
	// sochi
	// tula
	// tyumen
	this.ar_phone = new Object();
	this.ar_phone = ap;

	this.ar_phoneWA = new Object();
	this.ar_phoneWA = apWA;

	if (subdomain != "") {
		$('.phone-pics').hide();
		$(".phone-num a").each(function(index) {
			$(this).attr('href', "tel:" + th.ar_phone[subdomain]);
			$(this).html(th.ar_phone[subdomain]);
		});
		$('#call_WhatsApp').attr(
				'href',
				"https://api.whatsapp.com/send?phone="
						+ th.ar_phoneWA[subdomain]);
		$('#call_phone').attr('href', "tel:" + th.ar_phone[subdomain]);
	}

}
// ===========================================================================================================================
Cl_man_subdomains.prototype.init_pay_nalichnymi_kuryeru = function() {
	console_logM("Cl_man_subdomains init_pay_nalichnymi_kuryeru st");
	var th = this;
	$('#pay_nalichnymi_kuryeru').trigger('click');
	$('#pay_sberbank').hide();
	$('#pay_yandex').hide();
}

// ===========================================================================================================================
Cl_man_subdomains.prototype.init_links = function() {
	console_logM("Cl_man_subdomains init_links st");
	var th = this;
	// top-addresses_item
	// city-dropdown-wrapper
	// city-dropdown_item
	// --active

	$('.container_menuVertical .top-addresses_item').click(
			function(e) {
				console_logM("click top-addresses_item ");
				if ($(this).hasClass('top-addresses_item--active')) {
					$(this).removeClass("top-addresses_item--active");
					$(".city-dropdown-wrapper").removeClass(
							"city-dropdown-wrapper--active");
				} else {
					$(this).addClass("top-addresses_item--active");
					$(".city-dropdown-wrapper").addClass(
							"city-dropdown-wrapper--active");
				}
				e.preventDefault();
				return false;
			});

	$('.city-dropdown_item a')
			.each(
					function(index) {
						$(this)
								.click(
										function(e) {
											console_logM("click dropdown_item ");
											console_logM("Cl_man_subdomains $(this).attr( data-id )");
											console_logM($(this)
													.attr("data-id"));
											var sbd = $(this).attr("data-id")
													+ ".";
											if (sbd == "krasnodar.")
												sbd = "";
											var href_loc = SITE_pref
													+ "://"
													// var href_loc = "http://"
													+ sbd
													+ uri.domain(true)
													+ uri.pathname()
													+ "?"
													+ "city_cook="
													+ encodeURI($
															.cookie('location_user'));
											console_logM("Cl_man_subdomains href_loc");
											console_logM(href_loc);
											document.location.href = href_loc;

											e.preventDefault();
											return false;
										});
					});

}
// ===========================================================================================================================
Cl_man_subdomains.prototype.set_cur_subdomain = function() {
	console_logM("Cl_man_subdomains set_cur_ st");
	// uri.host();
	console_logM("Cl_man_subdomains uri.host() ");
	console_logM(uri.host());
	console_logM("Cl_man_subdomains uri.domain(true ");
	console_logM(uri.domain(true));
	v_subdomain = uri.host().replace("www.", "");
	v_subdomain = v_subdomain.replace(uri.domain(true), "");
	v_subdomain = v_subdomain.replace(uri.domain(true), "");
	v_subdomain = v_subdomain.replace(".", "");
	console_logM("Cl_man_subdomains v_subdomain");
	console_logM(v_subdomain);

	$('.header_topline .city-dropdown_item a')
			.each(
					function(index) {
						var sbd = $(this).attr("data-id");
						console_logM("Cl_man_subdomains set_cur_subdomain $(this).text()");
						console_logM($(this).text());
						if (v_subdomain == sbd
								|| (v_subdomain == "" && "krasnodar" == sbd)) {
							console_logM("Cl_man_subdomains set_cur_subdomain $(this).text()++++");
							console_logM($(this).text());
							$(this).parent().addClass(
									"city-dropdown_item--active");
							$('.top-addresses_item > a').text($(this).text());
						}
						if (v_subdomain == "" && "krasnodar" == sbd)
							return false;
					});
	$('.container_menuVertical  .city-dropdown_item a')
			.each(
					function(index) {
						var sbd = $(this).attr("data-id");
						console_logM("Cl_man_subdomains set_cur_subdomain $(this).text()");
						console_logM($(this).text());
						if (v_subdomain == sbd
								|| (v_subdomain == "" && "krasnodar" == sbd)) {
							console_logM("Cl_man_subdomains set_cur_subdomain $(this).text()++++");
							console_logM($(this).text());
							$(this).parent().addClass(
									"city-dropdown_item--active");
							$('.top-addresses_item > a').text($(this).text());
						}
						if (v_subdomain == "" && "krasnodar" == sbd)
							return false;
					});
	subdomain = v_subdomain;
	console_logM("set_cur_subdomain subdomain");
	console_logM(subdomain);

}

// ===========================================================================================================================
Cl_man_subdomains.prototype.man_menu = function() {
	console_logM("man_menu ");
	// li.dropdown.depth_level1.open
	if ($("body").has(".top-addresses_item").length) {
		console_logM("man_menu .has top-addresses_item");
		$("#show-city-tooltip").click(
				function() {
					console_logM("man_menu click top-addresses_item");
					// $(this).addClass("open");
					// $('.top-addresses_item').trigger('click');
					if ($(this).hasClass('top-addresses_item--active')) {
						$(this).removeClass("top-addresses_item--active");
						$(".city-dropdown-wrapper").removeClass(
								"city-dropdown-wrapper--active");
					} else {
						$(this).addClass("top-addresses_item--active");
						$(".city-dropdown-wrapper").addClass(
								"city-dropdown-wrapper--active");
					}

				});
	}
	if (jQuery("body").has("a.current").length) {
		$("body").find("a.current").parents("li.dropdown").find(
				"a.dropdown-toggle").addClass("current");
	}

}
// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_subscription
var Cl_man_subscription = function() {
	this.init();
}
// ===========================================================================================================================
Cl_man_subscription.prototype.init = function() {// 07-10-2017
	console_logM("Cl_man_subscription init st");
	var th = this;
	$('#bx_subscribe_btn_captch').click(function(e) {
		console_logM("click bx_subscribe_btn_captch ");
		th.Captcha_Check();
		e.preventDefault();
		return false;
	});

	$("input[name=SENDER_SUBSCRIBE_EMAIL]").focus(function() {
		// alert( "Handler for .focus() called." );
		$(".form-group-captcha").show();
		$(".form-group-captcha").attr('style', 'display:block !important;');// 29-12-20209:28

	});
	this.initFEEDBACK_FORM();
}
// ===========================================================================================================================
Cl_man_subscription.prototype.initFEEDBACK_FORM = function() {// 20-01-20217:46
	// $("#modal_feedback_form").modal('show');
	// this.data_FEEDBACK_FORM_init(); //d++
	console_logM("Cl_man_subscription initFEEDBACK_FORM st");
	$('.order-call').click(function(e) {
		console_logM("click order-call ");
		$("#modal_feedback_form").modal('show');
		e.preventDefault();
		return false;
	});

}
// ===========================================================================================================================
Cl_man_subscription.prototype.data_FEEDBACK_FORM_init = function() {
	console_logM("Cl_man_subscription data_FEEDBACK_FORM_init st");
	// return 0; //d++ // 18-09-201919:00 ////
	$("input[name=user_name]").val("user_name");
	$("input[name=user_phone]").val("+79780863181");
	$("#captcha_word_feedback_form").val("11111");
}
// ===========================================================================================================================

Cl_man_subscription.prototype.Captcha_Check = function() { // 07-10-2017
	console_logM("Cl_man_subscription Captcha_Check st");
	console_logM("Cl_man_subscription captcha_word   ");
	console_logM($("#captcha_word").val());
	var th = this;
	$.getJSON('/include/captcha_check.php', {
		// $_POST["captcha_word"], $_POST["captcha_code"]
		captcha_word : $("input[name=captcha_word]").val(),
		captcha_code : $("input[name=captcha_code]").val(),
		email : 111111111
	}, function(data) {
		console_logM("Cl_man_subscription Captcha_Check data");
		console_logM(data);
		if (typeof data.ans !== "undefined") {
			if (parseInt(data.ans) > 0) {
				$(".bts-subs_m").trigger('click');
				console_logM("Captcha_Check data++++++++++++++++++");
			} else {
				// $("#modal_comments .ans_creat_comments").html(data.ans);
				alert(data.ans);
				console_logM("Captcha_Check data*------------------");
			}
		} else {
			// $("#modal_comments .ans_creat_comments").html(data.ans);
			alert(data.ans);
			console_logM("Captcha_Check data*------------------");
		}
	}).fail(function() {
		$("#modal_comments .ans_creat_comments").html("error creat comment");
	});
}

// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_orientationchange
var Cl_man_orientationchange = function() {
	this.init();
	this.isFirst = false;
	this.backgroundPosition_popul_prod_s_portrait = "";
	this.backgroundPosition_popul_prod_s_landscape = "-53px 19px";// -53px
	// -27px
	// -26px
	this.backgroundPosition_popul_prod_s_landscape2 = "5px 19px";// -53px
	// -27px
	// -26px

	// 19px//-53px
	// 19px
	this.backgroundPosition_popul_prod_sT = "-233px 19px";

}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.init = function() {
	console_logM("Cl_man_orientationchange init st");
	// this.orientationchangeM();
	if (uri.hasQuery("border_show") === true || uri.hasQuery("b") === true) {
		alert("Cl_man_orientationchange border_show");// d
		this.orientationchangeTest();// //
	}

}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.orientationchangeTest = function() {
	console_logM("orientationchangeTest st");
	$('div').each(
			function(index) {
				var c1 = Math.floor(Math.random() * 255);
				var c2 = Math.floor(Math.random() * 255);
				var c3 = Math.floor(Math.random() * 255);
				$(this).css('border',
						'1px solid  rgb(' + c1 + ', ' + c2 + ', ' + c3 + ') ');// 394051
				// #ff0000
			});
}

// ===========================================================================================================================
Cl_man_orientationchange.prototype.orientationchangeM = function() {
	console_logM("orientationchangeM ");
	this.man_popul_prod_s();
	this.man_row_akcii();

	this.man_tbl_service();
	return false;// 222
	var pref_wrSelT = ".catalog-filterM__wrapper .col-tab-pane";
	if (widthG < 1050) {// catalog-filterM
		$(".catalog-filterM__wrapper .clearfix").attr('style',
				'display: block !important;');
		$(pref_wrSelT + "3").css('padding-top', '0px');
		$(pref_wrSelT + "3").css('padding-left', '15px');

		$(pref_wrSelT + "5").css('padding-left', '12px');
		$(pref_wrSelT + "5").css('padding-right', '12px');
		$(pref_wrSelT + "6").css('padding-left', '12px');
		$(pref_wrSelT + "6").css('padding-right', '12px');
	}
	if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: portrait)')) {
		console_logM('orientationchange Modernizr portrait');
		// 12-09-201712:16
		if (widthG <= 1050) {// catalog-filterM

		}

	} else if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: landscape)')) {
		if (widthG > 1050) {// catalog-filterM
			$(".catalog-filterM__wrapper .clearfix").attr('style',
					'display:none !important;');
			$(pref_wrSelT + "3").css('padding-top', '33px');
			$(pref_wrSelT + "3").css('padding-left', '10px');

			$(pref_wrSelT + "5").css('padding-left', '15px');
			$(pref_wrSelT + "5").css('padding-right', '15px');
			$(pref_wrSelT + "6").css('padding-left', '15px');

		}

		console_logM('orientationchange Modernizr landscape');
		$(pref_wrSelT + "6").css('padding-right', '15px');

	}

	// 16-09-201711:14
	if (widthG < 1024) {// catalog-filterM
		$(".row_kupon").appendTo($(".wr_row_order_b_right_n1a"));

	} else {
		$(".row_kupon").prependTo($(".wr_row_order_b_right_n1a"));
	}

}

// ===========================================================================================================================
Cl_man_orientationchange.prototype.man_row_akcii = function() {
	console_logM("man_row_akcii ");
	// 19-09-201717:53

	console_logM('man_row_akcii portrait widthG=' + widthG);

	if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: portrait)')) {
		console_logM('man_row_akcii portrait');

		if (widthG <= 500) {

		}

	} else if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: landscape)')) {
		if (widthG <= 500) {
		} else {
		}

	}
}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.man_popul_prod_s = function() {
	console_logM("man_popul_prod_s ");
	// 18-09-201710:45
	console_logM('man_popul_prod_s portrait widthG=' + widthG);

	if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: portrait)')) {
		console_logM('man_popul_prod_s portrait');
		if (this.backgroundPosition_popul_prod_s_portrait == "") {
			this.backgroundPosition_popul_prod_s_portrait = $('.popul_prod-s')
					.css('background-position');
		}
		if (widthG <= 500) {
			this.man_wr_img_prod();
			$(".wr_img_prod").css('display', 'block');
			$('.popul_prod-s').css('background-position',
					this.backgroundPosition_popul_prod_sT)
		}

	} else if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: landscape)')) {
		console_logM('man_popul_prod_s landscape this.backgroundPosition_popul_prod_s_landscape');
		console_logM(this.backgroundPosition_popul_prod_s_landscape);
		// if(this.backgroundPosition_popul_prod_s_landscape==""){
		// this.backgroundPosition_popul_prod_s_landscape=$('.popul_prod-s').css('background-position');
		// }
		if (widthG <= 500) {
			this.man_wr_img_prod();
			$(".wr_img_prod").css('display', 'block');
		} else if (widthG > 1100) {
			$(".wr_img_prod").css('display', 'none');
			$('.popul_prod-s').css('background-position',
					this.backgroundPosition_popul_prod_s_landscape2);

		} else {
			$(".wr_img_prod").css('display', 'none');
			$('.popul_prod-s').css('background-position',
					this.backgroundPosition_popul_prod_s_landscape);

		}

	}
	if (widthG <= 500 && heightG <= 500)
		$('.popul_prod-s').attr('style', 'background-image:none');
}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.man_wr_img_prod = function() {
	console_logM("man_wr_img_prod ");
	var wrImgSt = '<div class="wr_img_prod"  >';
	wrImgSt += '<img src="';
	var wrImgMid = '" alt="';
	var wrImgFin = '"></div>';
	$('.popul_prod-s').each(function(index) {
		if (!$(this).has(".wr_img_prod").length) {
			var bg = $(this).css('background-image');
			bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
			console_logM(bg);

			var wrImg = wrImgSt + bg + wrImgMid + index + wrImgFin;
			console_logM(wrImg);

			$(this).prepend(wrImg);

		}
	});
}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.man_tbl_service = function() {
	console_logM("orientationchangeM subdomain");
	console_logM(subdomain);// 09-07-201821:16
	if (subdomain == "rostov")
		this.man_tbl_service_krasnodar();
	// this.man_tbl_service_rostov();
	else
		this.man_tbl_service_krasnodar();

}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.man_tbl_service_rostov = function() {
	console_logM("man_tbl_service_rostov ");

	// 18-09-201710:45
	// .table_shinomontaj
	var num_rows_table_shinomontaj = 19
	// if (!this.isFirst) {

	// wr_tbl_service_1col
	var clone_table_shinomontaj1a = $(
			'.wr_table_shinomontaj1 .table_shinomontaj1').clone(true);
	$('.wr_tbl_service_1col').html(clone_table_shinomontaj1a);
	$('.wr_tbl_service_1col .table_shinomontaj1').find("tr").each(
			function(index) {
				// $(this).find("td:nth-child(1)").hide();
				for (var i = 3; i <= num_rows_table_shinomontaj; i++) {
					$(this).find("td:nth-child(" + i + ")").hide();
				}
				// $(this).find("td:nth-child(1)").hide();
			});

	// wr_tbl_service_other_col
	var clone_table_shinomontaj1b = $(
			'.wr_table_shinomontaj1 .table_shinomontaj1').clone(true);
	$('.wr_tbl_service_other_col').html(clone_table_shinomontaj1b);
	$('.wr_tbl_service_other_col .table_shinomontaj1').find("tr").each(
			function(index) {
				$(this).find("td:nth-child(1)").hide();
				$(this).find("td:nth-child(2)").hide();
				// for (var i = 2; i <= num_rows_table_shinomontaj; i++) {
				// $(this).find("td:nth-child("+i+")").hide();
				// }
				// $(this).find("td:nth-child(1)").hide();
			});
	setTimeout(function() {
		$('.wr_tbl_service_other_col .table_shinomontaj1').find("tr").each(
				function(index) {
					// tr:nth-child(6) > td:nth-child(1)
					var hei_tdLTbl = $(
							'.wr_tbl_service_1col .table_shinomontaj1 tr:nth-child('
									+ (index + 1) + ') > td:nth-child(1)')
							.height();
					console_logM('man_tbl_service_rostov portrait hei_tdLTbl');
					console_logM(hei_tdLTbl);
					$(this).find("td").height(hei_tdLTbl);
				});
	}, 500);

	// }
	// this.isFirst=true;
	if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: portrait)')) {
		console_logM('man_tbl_service_rostov portrait');
		if (widthG <= 1050) {
			$('.wr_table_shinomontaj1').hide();
			$('.wr_tbl_service_1col .table_shinomontaj1').show();
			$('.wr_tbl_service_other_col .table_shinomontaj1').show();
			$('.wr_tbl_service').show();
		}

	} else if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: landscape)')) {
		if (widthG > 1050) {
			$('.wr_tbl_service').hide();
			$('.wr_table_shinomontaj1').show();
		} else {
			setTimeout(function() {
				$('.wr_table_shinomontaj1').hide();
			}, 1000);
		}
	}
}
// ===========================================================================================================================
Cl_man_orientationchange.prototype.man_tbl_service_krasnodar = function() {
	console_logM("man_tbl_service_krasnodar ");
	console_logM("orientationchangeM subdomain");
	console_logM(subdomain);

	// 18-09-201710:45
	// .table_shinomontaj
	var num_rows_table_shinomontaj = 9
	// if (!this.isFirst) {

	// wr_tbl_service_1col
	var clone_table_shinomontaj1a = $(
			'.wr_table_shinomontaj1 .table_shinomontaj1').clone(true);
	$('.wr_tbl_service_1col').html(clone_table_shinomontaj1a);
	$('.wr_tbl_service_1col .table_shinomontaj1').find("tr").each(
			function(index) {
				// $(this).find("td:nth-child(1)").hide();
				for (var i = 2; i <= num_rows_table_shinomontaj; i++) {
					$(this).find("td:nth-child(" + i + ")").hide();
				}
				// $(this).find("td:nth-child(1)").hide();
			});

	// wr_tbl_service_other_col
	var clone_table_shinomontaj1b = $(
			'.wr_table_shinomontaj1 .table_shinomontaj1').clone(true);
	$('.wr_tbl_service_other_col').html(clone_table_shinomontaj1b);
	$('.wr_tbl_service_other_col .table_shinomontaj1').find("tr").each(
			function(index) {
				$(this).find("td:nth-child(1)").hide();
			});
	setTimeout(
			function() {
				$('.wr_tbl_service_other_col .table_shinomontaj1')
						.find("tr")
						.each(
								function(index) {
									// tr:nth-child(6) > td:nth-child(1)
									var hei_tdLTbl = $(
											'.wr_tbl_service_1col .table_shinomontaj1 tr:nth-child('
													+ (index + 1)
													+ ') > td:nth-child(1)')
											.height();
									console_logM('man_tbl_service_krasnodar portrait hei_tdLTbl');
									console_logM(hei_tdLTbl);
									$(this).find("td").height(hei_tdLTbl);
								});
			}, 500);

	// }
	// this.isFirst=true;
	if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: portrait)')) {
		console_logM('man_tbl_service_krasnodar portrait');
		if (widthG <= 1050) {
			$('.wr_table_shinomontaj1').hide();
			$('.wr_tbl_service_1col .table_shinomontaj1').show();
			$('.wr_tbl_service_other_col .table_shinomontaj1').show();
			$('.wr_tbl_service').show();
		}

	} else if (typeof Modernizr != "undefined"
			&& Modernizr.mq('(orientation: landscape)')) {
		if (widthG > 1050) {
			$('.wr_tbl_service').hide();
			$('.wr_table_shinomontaj1').show();
		} else {
			setTimeout(function() {
				$('.wr_table_shinomontaj1').hide();
			}, 1000);
		}
	}
}

// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_diski_zero
var Cl_man_diski_zero = function() {
	// this.init();
}
// ===========================================================================================================================
Cl_man_diski_zero.prototype.init = function() {
	console_logM("Cl_man_diski_zero init st");
	// wr-compl-fact-links
	$(".wr-compl .wr-compl-fact-links")
			.each(
					function(index) {
						console_logM("Cl_man_diski_zero init  index " + index);
						// $(this).find(".REAR").hide();
						var classDIAM_only_zero_REAR = $(this).find(".REAR")
								.next().prop("class");
						// console_logM($(this).find(".REAR").next());
						console_logM("Cl_man_diski_zero init  classDIAM_only_zero_REAR= "
								+ classDIAM_only_zero_REAR);
						if (classDIAM_only_zero_REAR == "DIAM_only_zero_REAR") {
							$(this).find(".REAR").hide();
							$(this).find(".FRONT").hide();
						}

						// $(this).prop("checked", false);
					});
}
// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_comments
var Cl_man_comments = function() {
	this.init();
	this.captcha_true = false;
	this.comment_sent = false;
}
// ===========================================================================================================================
Cl_man_comments.prototype.init = function() {
	console_logM("Cl_man_comments init st");
	this.init_btn();
	// this.creat_comments_test();// d
	// $('#mytab-pr a[href="#comments_prod"]').tab('show');// d

}
// ===========================================================================================================================
// 07-09-201711:59
Cl_man_comments.prototype.init_btn = function() {
	console_logM("Cl_man_comments init_btn st");

	$('#input_rating').rating('refresh', {
		min : 0,
		max : 5,
		step : 1,
		animate : false,
		// size : 'lg',
		// disabled : true,
		showClear : false,
		showCaption : false
	});

	$('#input_rating').rating('update', 0);
	$('#input_rating').on('rating.change', function(event, value, caption) {
		console.log(value);
		console.log(caption);
		$("input[name=comment_rating]").val(value);
	});

	$('.rating').rating('refresh', {
		showClear : false,
		showCaption : false
	});

	var th = this;
	// $('.btn_comments').show();
	$('.btn_comments').click(function(e) {
		console_logM("click btn_comments ");
		$("#modal_comments").modal('show');
		console_logM("click btn_comments th.comment_sent");
		console_logM(th.comment_sent);

		if (th.comment_sent) {
			th.comment_sent_act();
			e.preventDefault();
			return false;
		}

		e.preventDefault();
		return false;
	});

	$('#btn_comments_send').click(function(e) {
		console_logM("click btn_comments_send ");
		if (!th.captcha_true)
			th.Captcha_Check();
		// th.creat_comments();//d
		else
			th.creat_comments();
		e.preventDefault();
		return false;
	});
	$('#btn_comments_ok').click(function(e) {
		console_logM("click btn_comments ");
		$("#modal_comments").modal('hide');
		e.preventDefault();
		return false;
	});

	$('#modal_comments').on('hide.bs.modal', function() {
		console_logM("Cl_man_comments modal_comments hide st");
		th.captcha_true = false;
	});

}

// ===========================================================================================================================

Cl_man_comments.prototype.comment_sent_act = function() {// 07-09-201711:59
	$("#modal_comments .modal-body").html("Вы уже отправляли сообщение.");

	$("#modal_comments .modal-footer").hide();
	setTimeout(function() {
		$("#modal_comments").modal('hide');
	}, 5000);
}
// ===========================================================================================================================

Cl_man_comments.prototype.Captcha_Check = function() {// 07-09-201711:59
	// //07-10-2017
	console_logM("Cl_man_comments Captcha_Check st");
	console_logM("Cl_man_comments captcha_word   ");
	console_logM($("#captcha_word").val());
	var th = this;
	$.getJSON('/include/captcha_check.php', {
		// $_POST["captcha_word"], $_POST["captcha_code"]
		captcha_word : $("input[name=captcha_word]").val(),
		captcha_code : $("input[name=captcha_code]").val(),
		email : 111111111
	}, function(data) {
		console_logM("Captcha_Check data");
		console_logM(data);
		if (typeof data.ans !== "undefined") {
			if (parseInt(data.ans) > 0) {
				th.captcha_true = true;

				th.creat_comments();
				console_logM("Captcha_Check data++++++++++++++++++");
			} else {
				$("#modal_comments .ans_creat_comments").html(data.ans);
				console_logM("Captcha_Check data*------------------");
			}
		} else {
			$("#modal_comments .ans_creat_comments").html(data.ans);
			console_logM("Captcha_Check data*------------------");
		}
	}).fail(function() {
		$("#modal_comments .ans_creat_comments").html("error creat comment");
	});
}
// ===========================================================================================================================

Cl_man_comments.prototype.creat_comments_test = function() {// 07-09-201711:59
	$("input[name=USER_NAME]").val("USER_NAME111111");
	// $("input[name=comment_rating]").val("2");
	$("#comment_text").val("comment_text comment_text");
}
// ===========================================================================================================================

Cl_man_comments.prototype.creat_comments = function() {// 07-09-201711:59
	console_logM("Cl_man_comments creat_comments st");
	var th = this;
	var vUSER_NAME = $("input[name=USER_NAME]").val();
	var v_comment_text = $("#comment_text").val();
	if (!vUSER_NAME.length > 0) {
		var MessErrUSER_NAME = "Укажите ваше имя."
		$("#modal_comments .ans_creat_comments").html(MessErrUSER_NAME);
		return;
	}
	if (!v_comment_text.length > 0) {
		var MessErr_comment_text = "Укажите текст отзыва."
		$("#modal_comments .ans_creat_comments").html(MessErr_comment_text);
		return;
	}
	var vID_PROD = $("input[name=ID_PROD]").val();
	var vNAME_PROD = $("input[name=NAME_PROD]").val();

	$
			.getJSON(
					'/include/creat_comments.php',
					{
						DETAIL_PAGE_URL : $("input[name=DETAIL_PAGE_URL]")
								.val(),
						ID_PROD : vID_PROD,
						NAME_PROD : vNAME_PROD,
						BLOG_POST_ID : $("input[name=BLOG_POST_ID]").val(),
						USER_NAME : vUSER_NAME,
						comment_rating : $("input[name=comment_rating]").val(),
						comment_text : v_comment_text

					},
					function(data) {
						console_logM("creat_comments data");
						console_logM(data);
						if (typeof data.ID !== "undefined") {
							if (parseInt(data.ID) > 0) {
								th.comment_sent = true;
								setTimeout(function() {
									$("#modal_comments").modal('hide');
								}, 5000);

								console_logM("creat_comments data++++++++++++++++++");
							} else {
								$("#modal_comments .ans_creat_comments").html(
										data.ans);
								console_logM("creat_comments data*------------------");
							}
						}
						if (typeof data.ans !== "undefined") {
							$("#modal_comments .ans_creat_comments").html(
									data.ans);
						} else {
							$("#modal_comments .ans_creat_comments").html(
									"error creat comment");
						}
					}).fail(function() {
				$("#modal_comments .ans_creat_comments").html(

				"error creat comment");

			});

}

// ===========================================================================================================================
// ===========================================================================================================================
// 21-02-201811:20
// Cl_man_filter_Seo
var Cl_man_filter_Seo = function() {
	this.StrParamAx = "arrFilter_";
	this.dataPropShEq = {
		leto : "Лето",
		zima : "Зима",
		vsesezon : "Всесезон",
		bezshipov : "Нешипованные",
		shipy : "Шипованные",

	};
	this.dataPropShBrendHideEq = {};

	jQuery.extend(this.dataPropShBrendHideEq, dataPropShJsEqG);// 13-08-20198:33

	jQuery.extend(this.dataPropShEq, dataPropShJsEqG);// 18-03-2018

	console_logM(" Cl_man_filter_Seo = function this.dataPropShEq");
	console_logM(this.dataPropShEq);

	this.dataPropShMODEL_Eq = {};
	jQuery.extend(this.dataPropShMODEL_Eq, dataPropShMODEL_JsEqG);// 20-08-201913:02

	this.dataPropD_Eq = {

	};
	//jQuery.extend(this.dataPropD_Eq, dataPropDJsEqG);// 18-03-2018
	console_logM(" Cl_man_filter_Seo = function this.dataPropDEq");
	console_logM(this.dataPropD_Eq);
	this.man_dataBREND_existJs();// 11-10-201917:09
	//
	// kama/leto/205-60-r16/

	this.ind_ShProps = {
//			ShBREND : 540,
//			ShMODEL : 542,
//			ShSEZON : 535,
//			ShSHIP : 536,
//			ShSHIRINA : 537,
//			ShPROFIL : 538,
//			ShDIAMETR : 539,
			
			ShBREND :596,
			ShMODEL :603,
			ShSEZON :595,
			ShSHIP :606,
			ShSHIRINA :607,//02-02-20216:57
			ShPROFIL :593,
			ShDIAMETR :594,
	};

	this.ind_D_Props = {
		D_PROIZVODITEL_DISKOV : 409,
		D_DIAMETR_DISKA : 390,
		D_SHIRINA_OBODA : 412,
		D_KREPEZHNYE_OTVERSTIYA_PCD : 391,
		D_VYLET_DISKA_V_MM_ET : 392,
		D_STUPITSA_DIA : 393,
		D_SHIRINA_OBODA_DO : 411,
		D_SHIRINA_OBODA_OT : 410,
		D_STUPITSA_DO : 403,
		D_STUPITSA_OT : 402,
		D_VYLET_DISKA_OT : 400,
		D_VYLET_DISKA_DO : 401
	};

	this.dataShPathNewParts = {
		ShBREND : undefined,
		ShMODEL : undefined,
		ShSEZON : undefined,
		ShSHIP : undefined,
		ShSHIRINA : undefined,
		ShPROFIL : undefined,
		ShDIAMETR : undefined,
	};
	this.dataD_PathNewParts = {
		D_PROIZVODITEL_DISKOV : undefined,
		D_DIAMETR_DISKA : undefined,
		D_SHIRINA_OBODA : undefined,
		D_KREPEZHNYE_OTVERSTIYA_PCD : undefined,
		D_VYLET_DISKA_V_MM_ET : undefined,
		D_STUPITSA_DIA : undefined,
		D_SHIRINA_OBODA_DO : undefined,
		D_SHIRINA_OBODA_OT : undefined,
		D_STUPITSA_DO : undefined,
		D_STUPITSA_OT : undefined,
		D_VYLET_DISKA_OT : undefined,
		D_VYLET_DISKA_DO : undefined
	};
	this.ar_ind_PropSh = [ this.ind_ShProps.ShBREND, this.ind_ShProps.ShMODEL,
			this.ind_ShProps.ShSEZON, this.ind_ShProps.ShSHIP,
			this.ind_ShProps.ShSHIRINA, this.ind_ShProps.ShPROFIL,
			this.ind_ShProps.ShDIAMETR, ];
	this.ar_ind_PropD = [ this.ind_D_Props.D_DIAMETR_DISKA,
			this.ind_D_Props.D_SHIRINA_OBODA,
			this.ind_D_Props.D_KREPEZHNYE_OTVERSTIYA_PCD,
			this.ind_D_Props.D_VYLET_DISKA_V_MM_ET,
			this.ind_D_Props.D_STUPITSA_DIA,
			this.ind_D_Props.D_PROIZVODITEL_DISKOV,
			this.ind_D_Props.D_SHIRINA_OBODA_DO,
			this.ind_D_Props.D_SHIRINA_OBODA_OT,
			this.ind_D_Props.D_STUPITSA_DO, this.ind_D_Props.D_STUPITSA_OT,
			this.ind_D_Props.D_VYLET_DISKA_OT,
			this.ind_D_Props.D_VYLET_DISKA_DO ];

	this.ar_PropSh = [];
	this.ar_PropSh[this.ind_ShProps.ShBREND] = "BREND";
	this.ar_PropSh[this.ind_ShProps.ShMODEL] = "MODEL";
	this.ar_PropSh[this.ind_ShProps.ShSEZON] = "SEZON";
	this.ar_PropSh[this.ind_ShProps.ShSHIP] = "SHIP";
	this.ar_PropSh[this.ind_ShProps.ShSHIRINA] = "SHIRINA";
	this.ar_PropSh[this.ind_ShProps.ShPROFIL] = "PROFIL";
	this.ar_PropSh[this.ind_ShProps.ShDIAMETR] = "DIAMETR";

	this.ar_PropD = [];
	this.ar_PropD[this.ind_D_Props.D_DIAMETR_DISKA] = "DIAMETR_DISKA";
	this.ar_PropD[this.ind_D_Props.D_SHIRINA_OBODA] = "SHIRINA_OBODA";
	this.ar_PropD[this.ind_D_Props.D_KREPEZHNYE_OTVERSTIYA_PCD] = "KREPEZHNYE_OTVERSTIYA_PCD";
	this.ar_PropD[this.ind_D_Props.D_VYLET_DISKA_V_MM_ET] = "VYLET_DISKA_V_MM_ET";
	this.ar_PropD[this.ind_D_Props.D_STUPITSA_DIA] = "STUPITSA_DIA";
	this.ar_PropD[this.ind_D_Props.D_PROIZVODITEL_DISKOV] = "PROIZVODITEL_DISKOV";
	this.ar_PropD[this.ind_D_Props.D_SHIRINA_OBODA_DO] = "SHIRINA_OBODA_DO";
	this.ar_PropD[this.ind_D_Props.D_SHIRINA_OBODA_OT] = "SHIRINA_OBODA_OT";
	this.ar_PropD[this.ind_D_Props.D_STUPITSA_DO] = "STUPITSA_DO";
	this.ar_PropD[this.ind_D_Props.D_STUPITSA_OT] = "STUPITSA_OT";
	this.ar_PropD[this.ind_D_Props.D_VYLET_DISKA_OT] = "VYLET_DISKA_OT";
	this.ar_PropD[this.ind_D_Props.D_VYLET_DISKA_DO] = "VYLET_DISKA_DO ";

	this.init();

}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.init = function() {
	console_logM("Cl_man_filter_Seo init st");
	this.init_btn();//
	this.man_title_cat_m();
}
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.init_btn = function() {
	console_logM("Cl_man_filter_Seo init_btn st");
	if (jQuery("body").has("#filter-tires2017").length) {
		this.init_btnSh();
	} else if (jQuery("body").has("#filter-wheels2017").length) {
		this.init_btnD();
	}
}
// ===========================================================================================================================
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.man_title_cat_m = function() {
	console_logM("Cl_man_filter_Seo man_title_cat_m st");
	if (typeof is_partner === "undefined")
		return;
	var t = $("#filter-tires2017  div.bx_filter_select_text ").last().text();
	var str_t = t.fulltrim();
	if (typeof str_t !== "undefined") {
		if (str_t !== "Все") {
			var title_t = $(".title-cat-m").text();
			$(".title-cat-m").html(title_t + " " + str_t);
		}
	}

}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.init_is_kitaj = function(ar_segment, pathT, ar_ans0) {// 24-10-201910:46
	if (ar_segment[2] == "kitaj") {
		// var strSearch = "^.+/r";
		var strSearch = "^/r";
		var patt = new RegExp(strSearch);
		var res = patt.exec(ar_ans0);
		var strSearchA = "^r";
		var pattA = new RegExp(strSearchA);
		var resA = pattA.exec(ar_segment[3]);

		var strSearch2 = "zima|leto|opt|gazel";
		var patt2 = new RegExp(strSearch2);
		var res2 = patt2.exec(ar_segment[3]);

		// var strSearch2 = ".+(?<!/)r";
		// var patt2 = new RegExp(strSearch2);
		// var res2 = patt2.exec(ar_ans0);&& res2 == null//res != null &&
		if (res != null || (res2 != null && ar_ans0 == "/")
				|| (ar_segment[3] == "" && ar_ans0 == "/")
				|| (resA != null && ar_ans0 == "/")) {
			pathT += "/" + "kitaj";
			if (res2 != null)
				pathT += "/" + ar_segment[3];
		}
	}

	return pathT;
}
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.init_btnSh = function() {

	console_logM("Cl_man_filter_Seo init_btnSh st");
	var th = this;

	// $('#filter-tires2017').on( 'submit',
	$('#filter-tires2017').submit(
			function(e) {
				console_logM("Cl_man_filter_Seo filter-tires2017 onSubmit");
				pathM = $('#filter-tires2017').prop("action");
				path_shiny = vCl_man_subdomains.man_path_filter(pathM);// 10-10-201816:52
				var ar_segment = uri.segment(); // returns "foo"
				console_logM("init_btnSh ar_segment");
				console_logM(ar_segment);

				e.preventDefault();
				$.each(th.dataShPathNewParts, function(key, value) {
					eval("th.dataShPathNewParts." + key.toString()
							+ "=undefined;");
				});
				console_logM("init_btnSh th.dataShPathNewParts--");
				console_logM(th.dataShPathNewParts);
				var v_serialize = $(this).serialize();
				console.log(v_serialize);
				var ob_serialize = URI.parseQuery("?" + v_serialize);
				console_logM("init_btnSh ob_serialize");
				console_logM(ob_serialize);
				var ar_ans = th.init_PathQuerySh(ar_segment, ob_serialize);
				console_logM("init_btnSh Cl_man_filter_Seo ar_ans");
				console_logM(ar_ans);
				var v_offset_ar_segment = 0;
				if (url_carG) {
					v_offset_ar_segment = 5;
					ar_ans[1] = "";
				}
				var pathT = "/" + uri.segment(v_offset_ar_segment + 0) + "/"
						+ uri.segment(v_offset_ar_segment + 1)
				pathT = th.init_is_kitaj(ar_segment, pathT, ar_ans[0]);// 24-10-201910:46
				pathT += ar_ans[0];

				var parts = {
					protocol : SITE_pref,
					username : null,
					password : null,
					hostname : uri.hostname(),
					port : null,
					path : pathT,
					query : ar_ans[1],
					fragment : null
				};
				var uriL = URI.build(parts);
				console_logM("Cl_man_filter_Seo uriL");
				console_logM(uriL);
				path_shiny = vCl_man_subdomains.man_path_filter(uriL);// 10-10-201816:52

				document.location.href = path_shiny;// d--?
			});

}
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.init_btnD = function() {

	console_logM("Cl_man_filter_Seo init_btnD st");
	var th = this;

	$('#filter-wheels2017').on('submit', function(e) {
		console_logM("Cl_man_filter_Seo filter-wheels2017 onSubmit");
		$.each(th.dataD_PathNewParts, function(key, value) {
			eval("th.dataD_PathNewParts." + key.toString() + "=undefined;");
		});
		console_logM("init_btnD th.dataD_PathNewParts--");
		console_logM(th.dataD_PathNewParts);
		var ar_segment = uri.segment(); // returns "foo"
		console_logM("init_btnD ar_segment");
		console_logM(ar_segment);
		console.log($(this).serialize());
		var v_serialize = $(this).serialize();
		var ob_serialize = URI.parseQuery("?" + v_serialize);
		console_logM("init_btnD ob_serialize");
		console_logM(ob_serialize);
		var ar_ans = th.init_PathQueryD(ar_segment, ob_serialize);
		console_logM("init_btnD Cl_man_filter_Seo ar_ans");
		console_logM(ar_ans);

		if (typeof ar_ans[0] == "undefined") {
			console_logM("Cl_man_filter_Seo query parh*********");
			return true;// //d--//
		}
		e.preventDefault();
		var parts = {
			protocol : SITE_pref,
			username : null,
			password : null,
			hostname : uri.hostname(),
			port : null,
			path : "/" + uri.segment(0) + ar_ans[0],
			query : ar_ans[1],
			fragment : null
		};
		var uriL = URI.build(parts);
		if (ar_ans[0] == "/") {
			uriL = path_wheels;// //d--//
		}
		console_logM("Cl_man_filter_Seo uriL");
		console_logM(uriL);// //

		document.location.href = uriL;// d--
	});

}
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.man_dataBREND_existJs = function() {

}
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.get_PathNewPartSh = function(index, value) {
	console_logM("Cl_man_filter_Seo get_PathNewPartSh st");
	var valueText = "";
	var ind_PropSh = index.toString().replace(this.StrParamAx, "");
	ind_PropSh = parseInt(ind_PropSh);
	// console_logM("get_PathNewPartSh this.ar_PropSh");
	// console_logM(this.ar_PropSh);
	console_logM("get_PathNewPartSh ind_PropSh+" + ind_PropSh);
	console_logM("get_PathNewPartSh this.ar_ind_PropSh+" + this.ar_ind_PropSh);
	console_logM("get_PathNewPartSh inArray+"
			+ jQuery.inArray(ind_PropSh, this.ar_ind_PropSh));
	if (jQuery.inArray(ind_PropSh, this.ar_ind_PropSh) !== -1) {
		var $label = $("label[for='" + index.toString() + "_"
				+ value.toString() + "']");
		valueText = $label.text().toLowerCase();
		console_logM("get_PathNewPartSh valueText+" + valueText);
		valueText = valueText.replace(/(\r\n|\n|\r|\t)/gm, "");
		console_logM("get_PathNewPartSh valueText+valueText+" + valueText);
		var valueTextEq = undefined;
		if (ind_PropSh == this.ind_ShProps.ShMODEL)
			valueTextEq = this.get_PropShMODEL_Eq(valueText);// 20-08-201913:02
		else
			// if (ind_PropSh == this.ind_ShProps.ShBREND)
			valueTextEq = this.get_PropShEq(valueText);
		// this.ind_ShProps.ShBREND, this.ind_ShProps.ShMODEL
		if (typeof valueTextEq !== "undefined") {
			valueText = valueTextEq;
		}
		var strCommL = "this.dataShPathNewParts.Sh"
				+ this.ar_PropSh[ind_PropSh] + "='" + valueText + "'";
		console_logM("+++++++++get_PathNewPartSh strCommL+" + strCommL);
		eval(strCommL);

	}
	console_logM("this.dataShPathNewParts");
	console_logM(this.dataShPathNewParts);

	return valueText;
}
// ===========================================================================================================================

Cl_man_filter_Seo.prototype.get_PathNewPartD = function(index, value) {
	console_logM("Cl_man_filter_Seo get_PathNewPartD  st");
	var valueText = "";
	var ind_PropD = index.toString().replace(this.StrParamAx, "");
	ind_PropD = parseInt(ind_PropD);
	// console_logM("get_PathNewPartD this.ar_PropD ");
	// console_logM(this.ar_PropD );
	console_logM("get_PathNewPartD  ind_PropD +" + ind_PropD);
	console_logM("get_PathNewPartD  this.ar_ind_PropD");
	console_logM(this.ar_ind_PropD);
	console_logM("get_PathNewPartD  inArray+"
			+ jQuery.inArray(ind_PropD, this.ar_ind_PropD));
	if (jQuery.inArray(ind_PropD, this.ar_ind_PropD) !== -1) {
		var $label = $("label[for='" + index.toString() + "_"
				+ value.toString() + "']");
		valueText = $label.text().toLowerCase();
		console_logM("get_PathNewPartD  valueText+" + valueText);
		valueText = valueText.replace(/(\r\n|\n|\r|\t)/gm, "");
		console_logM("get_PathNewPartD  valueText+valueText+" + valueText);
		var valueTextEq = this.get_PropD_Eq(valueText);
		if (typeof valueTextEq !== "undefined") {
			valueText = valueTextEq;
		}
		var strCommL = "this.dataD_PathNewParts.D_" + this.ar_PropD[ind_PropD]
				+ "='" + valueText + "'";
		console_logM("+++++++++get_PathNewPartD  strCommL+" + strCommL);
		eval(strCommL);

	}
	console_logM("get_PathNewPartD valueText");
	console_logM(valueText);
	console_logM("this.dataD PathNewParts");
	console_logM(this.dataD_PathNewParts);

	return valueText;
}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.init_PathQuerySh = function(ar_segment,
		ob_serialize) {
	console_logM("Cl_man_filter_Seo init_PathQuerySh st");
	console_logM("init_PathQuerySh ar_segment");
	console_logM(ar_segment);
	console_logM("init_PathQuerySh ob_serialize");
	console_logM(ob_serialize);
	var th = this;//

	delete ob_serialize.PAGEN_2;
	$.each(ob_serialize, function(index, value) {
		console.log(' init_PathQuerySh Индекс: ' + index.toString()
				+ '; Значение: ' + value.toString());
		if (value.toString() == "") {
			// delete ob_serialize.index;
			console_logM("init_PathQuerySh empty+" + value.toString());
			eval("delete ob_serialize." + index.toString());

		} else {
			var PathNew = th.get_PathNewPartSh(index, value);
			if (PathNew != "") {
				eval("delete ob_serialize." + index.toString());
			}
		}
	});
	console_logM("init_PathQuerySh ob_serialize 2");
	console_logM(ob_serialize);
	var v_Query = URI.buildQuery(ob_serialize);
	console_logM("Cl_man_filter_Seo v_Query");
	console_logM(v_Query);

	var v_Path = "";

	var v_Path_end = "";
	if (typeof this.dataShPathNewParts.ShSHIRINA !== "undefined")
		v_Path_end += this.dataShPathNewParts.ShSHIRINA;
	if (typeof this.dataShPathNewParts.ShPROFIL !== "undefined")
		v_Path_end += "-" + this.dataShPathNewParts.ShPROFIL;
	if (typeof this.dataShPathNewParts.ShPROFIL !== "undefined") {
		if (typeof this.dataShPathNewParts.ShDIAMETR !== "undefined")
			v_Path_end += "-" + this.dataShPathNewParts.ShDIAMETR;
	} else if (typeof this.dataShPathNewParts.ShDIAMETR !== "undefined") {
		if (v_Path_end != "")
			v_Path_end += "-";
		v_Path_end += this.dataShPathNewParts.ShDIAMETR;
	}

	if (v_Path_end != "")
		v_Path_end += "/";
	delete this.dataShPathNewParts.ShSHIRINA;
	delete this.dataShPathNewParts.ShPROFIL;
	delete this.dataShPathNewParts.ShDIAMETR;
	$.each(this.dataShPathNewParts, function(key, value) {
		console.log('init_PathQuerySh dataShPathNewParts Свойство: ' + key
				+ '; Значение: ' + value);
		console.log('init_PathQuerySh v_Path: ' + v_Path);
		if (typeof value !== "undefined") {
			v_Path = v_Path + "/" + value;
		}
	});
	v_Path = v_Path + "/" + v_Path_end;
	v_Path = v_Path.replace("_", "-");
	v_Path = v_Path.replace("_", "-");
	console_logM("Cl_man_filter_Seo v_Path");
	console_logM(v_Path);

	return [ v_Path, v_Query ];
}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.init_PathQueryD = function(ar_segment, ob_serialize) {
	console_logM("Cl_man_filter_Seo init_PathQueryD st");
	console_logM("init_PathQueryD ar_segment");
	console_logM(ar_segment);
	console_logM("init_PathQueryD ob_serialize");
	console_logM(ob_serialize);
	var th = this;//
	delete ob_serialize.PAGEN_2;

	$.each(ob_serialize, function(index, value) {
		console.log(' init_PathQueryD Индекс: ' + index.toString()
				+ '; Значение: ' + value.toString());
		if (value.toString() == "") {
			// delete ob_serialize.index;
			console_logM("init_PathQueryD empty+" + value.toString());
			eval("delete ob_serialize." + index.toString());

		} else {
			var PathNew = th.get_PathNewPartD(index, value);
			if (PathNew != "") {
				console_logM("delete ob_serialize." + index.toString());
				eval("delete ob_serialize." + index.toString());
			}
		}
	});
	console_logM("init_PathQueryD ob_serialize 2");
	console_logM(ob_serialize);
	var v_Query = URI.buildQuery(ob_serialize);
	console_logM("Cl_man_filter_Seo v_Query");
	console_logM(v_Query);
	$.each(this.dataD_PathNewParts, function(key, value) {
		console.log('init_PathQueryD 11111111 dataD_PathNewParts Свойство: '
				+ key + '; Значение: ' + value);

	});

	var v_Path = "";

	var v_Path_end = "";
	console_logM("init_PathQueryD this.dataD_PathNewParts");
	console_logM(this.dataD_PathNewParts);
	if (typeof this.dataD_PathNewParts.D_DIAMETR_DISKA !== "undefined")
		this.dataD_PathNewParts.D_DIAMETR_DISKA = "r"
				+ this.dataD_PathNewParts.D_DIAMETR_DISKA;
	if (typeof this.dataD_PathNewParts.D_KREPEZHNYE_OTVERSTIYA_PCD !== "undefined")
		this.dataD_PathNewParts.D_KREPEZHNYE_OTVERSTIYA_PCD = this.dataD_PathNewParts.D_KREPEZHNYE_OTVERSTIYA_PCD
				.replace("/", "x");

	if (!this.checkEqParamsD(this.dataD_PathNewParts.D_SHIRINA_OBODA_OT,
			this.dataD_PathNewParts.D_SHIRINA_OBODA_DO))
		return [];
	if (typeof this.dataD_PathNewParts.D_SHIRINA_OBODA_OT !== "undefined")
		v_Path_end += this.dataD_PathNewParts.D_SHIRINA_OBODA_OT;
	if (!this.checkEqParamsD(this.dataD_PathNewParts.D_VYLET_DISKA_OT,
			this.dataD_PathNewParts.D_VYLET_DISKA_DO))
		return [];
	if (typeof this.dataD_PathNewParts.D_VYLET_DISKA_OT !== "undefined") {
		this.dataD_PathNewParts.D_VYLET_DISKA_OT = this.dataD_PathNewParts.D_VYLET_DISKA_OT
				.replace(",", ".");
		v_Path_end += "-" + this.dataD_PathNewParts.D_VYLET_DISKA_OT;
	}

	if (!this.checkEqParamsD(this.dataD_PathNewParts.D_STUPITSA_OT,
			this.dataD_PathNewParts.D_STUPITSA_DO))
		return [];
	// if (typeof this.dataD_PathNewParts.D_STUPITSA_OT !== "undefined"){
	// this.dataD_PathNewParts.D_STUPITSA_OT =
	// this.dataD_PathNewParts.D_STUPITSA_OT.replace(",", ".");
	// v_Path_end += "-" + this.dataD_PathNewParts.D_STUPITSA_OT;
	// }
	console_logM("init_PathQueryD this.dataD_PathNewParts.D_STUPITSA_OT ");
	console_logM(this.dataD_PathNewParts.D_STUPITSA_OT);
	console_logM("init_PathQueryD this.dataD_PathNewParts.D_VYLET_DISKA_OT ");
	console_logM(this.dataD_PathNewParts.D_VYLET_DISKA_OT);

	if (typeof this.dataD_PathNewParts.D_STUPITSA_OT !== "undefined") {
		this.dataD_PathNewParts.D_STUPITSA_OT = this.dataD_PathNewParts.D_STUPITSA_OT
				.replace(",", ".");
		if (typeof this.dataD_PathNewParts.D_VYLET_DISKA_OT !== "undefined") {
			this.dataD_PathNewParts.D_STUPITSA_OT = this.dataD_PathNewParts.D_STUPITSA_OT
					.replace(",", ".");
			v_Path_end += "-" + this.dataD_PathNewParts.D_STUPITSA_OT;
		} else {
			if (v_Path_end != "")
				v_Path_end += "--";
			console_logM("init_PathQueryD D_STUPITSA_OT D_STUPITSA_OT D_STUPITSA_OT ");
			v_Path_end += this.dataD_PathNewParts.D_STUPITSA_OT;
		}
	}
	console.log('init_PathQueryD v_Path_end: ' + v_Path_end);

	if (v_Path_end != "")
		v_Path_end += "/";
	delete this.dataD_PathNewParts.D_SHIRINA_OBODA_DO;
	delete this.dataD_PathNewParts.D_SHIRINA_OBODA_OT;
	delete this.dataD_PathNewParts.D_STUPITSA_DO;
	delete this.dataD_PathNewParts.D_STUPITSA_OT;
	delete this.dataD_PathNewParts.D_VYLET_DISKA_DO;
	delete this.dataD_PathNewParts.D_VYLET_DISKA_OT;

	$.each(this.dataD_PathNewParts, function(key, value) {
		console.log('init_PathQueryD dataD_PathNewParts Свойство: ' + key
				+ '; Значение: ' + value);
		console.log('init_PathQueryD v_Path: ' + v_Path);

		if (typeof value !== "undefined") {
			v_Path = v_Path + "/" + value;
		}
	});
	v_Path = v_Path + "/" + v_Path_end;
	v_Path = v_Path.replace("_", "-");
	console_logM("Cl_man_filter_Seo v_Path");
	console_logM(v_Path);

	return [ v_Path, v_Query ];
}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.checkEqParamsD = function(v1, v2) {
	console_logM("Cl_man_filter_Seo checkEqParamsD st");
	// console_logM("Cl_man_filter_Seo checkEqParamsD v1");
	// console_logM(v1);
	// console_logM("Cl_man_filter_Seo checkEqParamsD v2");
	// console_logM(v2);
	if (typeof v1 === "undefined" && typeof v2 === "undefined")
		return true;
	if (typeof v1 === "undefined" || typeof v2 === "undefined")
		return false;
	if (typeof v1 !== "undefined" && typeof v2 !== "undefined")
		if (v1 != v2)
			return false;
	console_logM("Cl_man_filter_Seo checkEqParamsD");
	console_logM(v1);
	console_logM(v2);
	return true;
}

// ===========================================================================================================================
Cl_man_filter_Seo.prototype.get_PropShEq = function(valueText) {
	console_logM("Cl_man_filter_Seo get_PropShEq st");
	var ans = undefined;
	$.each(this.dataPropShEq, function(key, value) {
		console.log('get_PropShEq Свойство: ' + key + '; Значение: ' + value
				+ '; valueText: ' + valueText);
		if (value.toLowerCase() == valueText) {
			ans = key;
		}
	});
	return ans;

}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.get_PropShMODEL_Eq = function(valueText) {// 20-08-201913:02
	console_logM("Cl_man_filter_Seo get_PropShMODEL_Eq st");
	var ans = undefined;
	$.each(this.dataPropShMODEL_Eq, function(key, value) {
		console.log('get_PropShMODEL_Eq Свойство: ' + key + '; Значение: '
				+ value + '; valueText: ' + valueText);
		if (value.toLowerCase() == valueText) {
			ans = key;
		}
	});
	return ans;

}
// ===========================================================================================================================
Cl_man_filter_Seo.prototype.get_PropD_Eq = function(valueText) {
	console_logM("Cl_man_filter_Seo get_PropD_Eq st");
	var ans = undefined;
	$.each(this.dataPropD_Eq, function(key, value) {
		// console.log('get_PropD_Eq Свойство: ' + key + '; Значение: ' +
		// value);
		if (value.toLowerCase() == valueText) {
			ans = key;
		}
	});
	return ans;

}
// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_filter_mob
var Cl_man_filter_mob = function() {
	this.init();
}
// ===========================================================================================================================
Cl_man_filter_mob.prototype.init = function() {
	console_logM("Cl_man_filter_mob init st");
	this.init_btn();
}
// ===========================================================================================================================
Cl_man_filter_mob.prototype.init_btn = function() {
	console_logM("Cl_man_filter_mob init_btn st");
	var th = this;//
	if (typeof Modernizr != "undefined"
			&& ((Modernizr.mq('(orientation: landscape)') && widthG < 1025) || (!Modernizr
					.mq('(orientation: landscape)') && widthG < 1024))) {
		console_logM(Modernizr.mq('(orientation: landscape)'));
		console_logM("widthG=" + widthG + " heightG=" + heightG);
		$('#modal_filter_mob  .col-filter').css("width", "100%");

		$('.btn_filter_mob').show();
		var filterData = $('.col-filter').detach();
		filterData
				.appendTo("#modal_filter_mob  div.modal-body > div > div > div");
		// $("#modal_filter_mob div.modal-body > div > div >
		// div").html(filterData);
		// wr-filter-m
		$('.btn_filter_mob').click(function(e) {
			console_logM("click btn_filter_mob ");
			$("#modal_filter_mob").modal('show');
			e.preventDefault();
			return false;
		});
		$('#btn_filter_mob_ok').click(function(e) {
			console_logM("click btn_filter_mob ");
			$("#modal_filter_mob").modal('hide');
			e.preventDefault();
			return false;
		});

		var offsetBottom = 300;
		$(window).scroll(
				function() {

					if ($(window).scrollTop() + $(window).height()
							+ offsetBottom > $(document).height()) {
						console_logM("bottom!");
						$(".btn_filter_mob").fadeOut(2000, function() {

						});

					} else {
						$(".btn_filter_mob").fadeOut(2000, function() {

						});

					}
				});

		// extension:
		$.fn.scrollEnd = function(callback, timeout) {
			$(this).scroll(function() {
				var $this = $(this);
				if ($this.data('scrollTimeout')) {
					clearTimeout($this.data('scrollTimeout'));
				}
				$this.data('scrollTimeout', setTimeout(callback, timeout));
			});
		};

		// how to call it (with a 1000ms timeout):
		$(window).scrollEnd(
				function() {
					console_logM('stopped scrolling');

					// $(".page-cat").fadeIn(3000, function() {
					if ($(window).scrollTop() + $(window).height()
							+ offsetBottom < $(document).height()) {
						$(".btn_filter_mob").fadeIn(500, function() {

						});
					}

					// $('.btn_filter_mob').show();
				}, 1000);

	}

}
// ===========================================================================================================================
Cl_man_filter_mob.prototype.get_filter_fields_to_ax_wr = function() {
	console_logM("get_filter_fields_to init_btn st");
	// 12-09-201712:16
	var th = this;
	// var ar_id_filter = [ "SHIRINA", "PROFIL", "SEZON", "SHIP",
	// "DIAMETR",
	// "BREND" ];
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane2  .form-group")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane3  .form-group")
			.html("");

}
// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_location_user
var Cl_man_location_user = function() {
	this.location_code_sh = "";
	this.location_user_city = "";
	this.location_ymaps = "";

	// this.init();
}

// ===========================================================================================================================
Cl_man_location_user.prototype.init_modal_btns = function() {
	console_logM("Cl_man_location_user init_modal_btns st");
	var th = this;

	$('#btn_location_user_yes').click(function(e) {
		console_logM("click btn_location_user_yes");// 18-09-201919:00
		th.save_location_user();
		th.set_location_user();

		$("#modal_location_user_is").modal('hide');
		e.preventDefault();
		return false;
	});
	$('#btn_location_user_no').click(function(e) {
		console_logM("click  -btn_location_user_no");
		$("#modal_location_user_is").modal('hide');
		$("#modal_location_user_get").modal('show');
		e.preventDefault();
		return false;
	});
	$('#btn_location_user_get_ok')
			.click(
					function(e) {
						console_logM("click  -btn_location_user_get_ok");
						var LOCATION = $(
								'#modal_location_user_get .bx-ui-sls-container .bx-ui-sls-fake')
								.prop("title");
						console_logM("click  -btn_location_user_get_ok LOCATION");
						console_logM(LOCATION);
						console_logM(LOCATION.length);
						th.location_code_sh = "";
						if (LOCATION.length >= 20) {
							th.save_location_user();
							th.set_location_user();
						}
						$("#modal_location_user_get").modal('hide');
						e.preventDefault();
						return false;
					});
	$("div.sec1.city-name,div.sec1.city-note").click(function(e) {
		console_logM("click  -sec1.city-name");
		$("#modal_location_user_get").modal('show');
		e.preventDefault();
		return false;
	});
}
// ===========================================================================================================================

function modal_location_user_get_CALLBACK() {
	vCl_man_location_user.modal_location_user_get_CALLBACK();
};
// ===========================================================================================================================
Cl_man_location_user.prototype.modal_location_user_get_CALLBACK = function() {
	console_logM("modal_location_user_get_CALLBACK   st");
	// $("#modal_location_user_get input[name=LOCATION]").val();
	// var LOCATION = $('#location_user_m').val();
	var LOCATION = $(
			'#modal_location_user_get .bx-ui-sls-container .bx-ui-sls-fake')
			.prop("title");

	console_logM("modal_location_user_get_CALLBACK LOCATION");
	console_logM(LOCATION);
	var ar_LOCATION = LOCATION.split(",");
	if (ar_LOCATION[0].length >= 3) {
		LOCATION = ar_LOCATION[0] != "" ? ar_LOCATION[0] : "";
		this.location_user_city = LOCATION;
	}

}

// ===========================================================================================================================
Cl_man_location_user.prototype.save_location_user = function(is_save) {
	console_logM("save_location_user   st     22222222222");

	if (this.location_ymaps != "")
		$.cookie('location_ymaps', this.location_ymaps, {
			expires : 30,
			path : '/'
		});
	$.cookie('location_user', this.location_user_city, {
		expires : 30,
		path : '/'
	});
	var location_code = $(
			'#modal_location_user_get  div.dropdown-block.bx-ui-sls-input-block > input')
			.val();

	$.cookie('location_code', location_code, {
		expires : 30,
		path : '/'
	});
	$.cookie('location_code_sh', this.location_code_sh, {
		expires : 30,
		path : '/'
	});
	if (!is_save)
		vCl_man_ymaps_subdomains.get_coords_user(this.location_user_city);

	var cookie_cookie = $.cookie(); // => { "name": "value" }

	console_logM("save_location_user cookie_cookie");
	console_logM(cookie_cookie);
}
// ===========================================================================================================================
Cl_man_location_user.prototype.set_location_user_in_orderOnStart = function() {
	console_logM("set_location_user_in_orderOnStart   st");
	setTimeout(function() {
		f_JS_CALLBACK();
	}, 3000);
}
// ===========================================================================================================================
Cl_man_location_user.prototype.is_set_location_user = function() {
	console_logM("is_set_location_user   st");

	var cookie_cookie = $.cookie(); // => { "name": "value" }

	console_logM("is_set_location_user cookie_cookie");
	console_logM(cookie_cookie);
	// return false;// d
	if (typeof cookie_cookie.location_code === "undefined"
			&& typeof cookie_cookie.location_user == "undefined") {
		console_logM("is_set_location_user   false");
		return false;
	} else {
		if (cookie_cookie.location_user == "") {
			console_logM("is_set_location_user   false");
			return false;
		}
		if (typeof cookie_cookie.location_ymaps === "undefined") {
			console_logM("is_set_location_user   false");
			$.cookie('location_ymaps', "", {
				expires : 30,
				path : '/'
			});
			return false;
		}
		console_logM("is_set_location_user   true");
		return true;
	}
	return true;
}
// ===========================================================================================================================
Cl_man_location_user.prototype.islocationSetOnForm = function() {
	console_logM("islocationSetOnForm   st");
	if (jQuery("#bx-soa-region input.bx-ui-sls-fake").val() == "") {
		if (vCl_man_row_order.checklocationSetOnForm != false)
			alert("Местоположение, пожалуйста, укажите. ");
		return false;
	}

	return true;
}
// ===========================================================================================================================
Cl_man_location_user.prototype.init = function() {
	console_logM("Cl_man_location_user init st");
	this.init_modal_btns();
	if (uri.hasQuery(vCl_man_ymaps_subdomains.city_cook) === true
			&& result_uri_vars.city_cook != "") {
		console_logM("Cl_man_location_user city_cook*****");
		console_logM("Cl_man_location_user init result_uri_vars.city_cook");
		console_logM(result_uri_vars.city_cook);
		this.location_user_city = decodeURI(result_uri_vars.city_cook)
		console_logM("Cl_man_location_user init this.location_user_city");
		console_logM(this.location_user_city);
		this.save_location_user(true);
		this.set_location_user();
		console_logM("Cl_man_location_user city_cook*****22222222");

	} else {
		console_logM("Cl_man_location_user city_cook---------");
		if (!this.is_set_location_user()) {
			if (remote_addr != "127.0.0.1")
				// this.get_city_by_ip();
				getLocation();
			// ymaps.ready(this.get_city_by_ymaps);
			else {
				data_city = "Севастополь";
				this.get_city_by_ymaps_resp(data_city);
			}

		} else {
			this.set_location_user();
		}
	}

	// page order
	if (jQuery("body").has(".row_order").length) {
		this.set_location_user_in_orderOnStart();
	}

}

// ===========================================================================================================================
var DMap = {
	0 : 0,
	1 : 1,
	2 : 2,
	3 : 3,
	4 : 4,
	5 : 5,
	6 : 6,
	7 : 7,
	8 : 8,
	9 : 9,
	10 : 10,
	11 : 11,
	12 : 12,
	13 : 13,
	14 : 14,
	15 : 15,
	16 : 16,
	17 : 17,
	18 : 18,
	19 : 19,
	20 : 20,
	21 : 21,
	22 : 22,
	23 : 23,
	24 : 24,
	25 : 25,
	26 : 26,
	27 : 27,
	28 : 28,
	29 : 29,
	30 : 30,
	31 : 31,
	32 : 32,
	33 : 33,
	34 : 34,
	35 : 35,
	36 : 36,
	37 : 37,
	38 : 38,
	39 : 39,
	40 : 40,
	41 : 41,
	42 : 42,
	43 : 43,
	44 : 44,
	45 : 45,
	46 : 46,
	47 : 47,
	48 : 48,
	49 : 49,
	50 : 50,
	51 : 51,
	52 : 52,
	53 : 53,
	54 : 54,
	55 : 55,
	56 : 56,
	57 : 57,
	58 : 58,
	59 : 59,
	60 : 60,
	61 : 61,
	62 : 62,
	63 : 63,
	64 : 64,
	65 : 65,
	66 : 66,
	67 : 67,
	68 : 68,
	69 : 69,
	70 : 70,
	71 : 71,
	72 : 72,
	73 : 73,
	74 : 74,
	75 : 75,
	76 : 76,
	77 : 77,
	78 : 78,
	79 : 79,
	80 : 80,
	81 : 81,
	82 : 82,
	83 : 83,
	84 : 84,
	85 : 85,
	86 : 86,
	87 : 87,
	88 : 88,
	89 : 89,
	90 : 90,
	91 : 91,
	92 : 92,
	93 : 93,
	94 : 94,
	95 : 95,
	96 : 96,
	97 : 97,
	98 : 98,
	99 : 99,
	100 : 100,
	101 : 101,
	102 : 102,
	103 : 103,
	104 : 104,
	105 : 105,
	106 : 106,
	107 : 107,
	108 : 108,
	109 : 109,
	110 : 110,
	111 : 111,
	112 : 112,
	113 : 113,
	114 : 114,
	115 : 115,
	116 : 116,
	117 : 117,
	118 : 118,
	119 : 119,
	120 : 120,
	121 : 121,
	122 : 122,
	123 : 123,
	124 : 124,
	125 : 125,
	126 : 126,
	127 : 127,
	1027 : 129,
	8225 : 135,
	1046 : 198,
	8222 : 132,
	1047 : 199,
	1168 : 165,
	1048 : 200,
	1113 : 154,
	1049 : 201,
	1045 : 197,
	1050 : 202,
	1028 : 170,
	160 : 160,
	1040 : 192,
	1051 : 203,
	164 : 164,
	166 : 166,
	167 : 167,
	169 : 169,
	171 : 171,
	172 : 172,
	173 : 173,
	174 : 174,
	1053 : 205,
	176 : 176,
	177 : 177,
	1114 : 156,
	181 : 181,
	182 : 182,
	183 : 183,
	8221 : 148,
	187 : 187,
	1029 : 189,
	1056 : 208,
	1057 : 209,
	1058 : 210,
	8364 : 136,
	1112 : 188,
	1115 : 158,
	1059 : 211,
	1060 : 212,
	1030 : 178,
	1061 : 213,
	1062 : 214,
	1063 : 215,
	1116 : 157,
	1064 : 216,
	1065 : 217,
	1031 : 175,
	1066 : 218,
	1067 : 219,
	1068 : 220,
	1069 : 221,
	1070 : 222,
	1032 : 163,
	8226 : 149,
	1071 : 223,
	1072 : 224,
	8482 : 153,
	1073 : 225,
	8240 : 137,
	1118 : 162,
	1074 : 226,
	1110 : 179,
	8230 : 133,
	1075 : 227,
	1033 : 138,
	1076 : 228,
	1077 : 229,
	8211 : 150,
	1078 : 230,
	1119 : 159,
	1079 : 231,
	1042 : 194,
	1080 : 232,
	1034 : 140,
	1025 : 168,
	1081 : 233,
	1082 : 234,
	8212 : 151,
	1083 : 235,
	1169 : 180,
	1084 : 236,
	1052 : 204,
	1085 : 237,
	1035 : 142,
	1086 : 238,
	1087 : 239,
	1088 : 240,
	1089 : 241,
	1090 : 242,
	1036 : 141,
	1041 : 193,
	1091 : 243,
	1092 : 244,
	8224 : 134,
	1093 : 245,
	8470 : 185,
	1094 : 246,
	1054 : 206,
	1095 : 247,
	1096 : 248,
	8249 : 139,
	1097 : 249,
	1098 : 250,
	1044 : 196,
	1099 : 251,
	1111 : 191,
	1055 : 207,
	1100 : 252,
	1038 : 161,
	8220 : 147,
	1101 : 253,
	8250 : 155,
	1102 : 254,
	8216 : 145,
	1103 : 255,
	1043 : 195,
	1105 : 184,
	1039 : 143,
	1026 : 128,
	1106 : 144,
	8218 : 130,
	1107 : 131,
	8217 : 146,
	1108 : 186,
	1109 : 190
}

function UnicodeToWin1251(s) {
	var L = []
	for (var i = 0; i < s.length; i++) {
		var ord = s.charCodeAt(i)
		if (!(ord in DMap))
			throw "Character " + s.charAt(i) + " isn't supported by win1251!"
		L.push(String.fromCharCode(DMap[ord]))
	}
	return L.join('')
}
// ===========================================================================================================================

function win2unicode(str) {
	if (str == null) {
		return "";
	}
	var result = "";
	var o_code = "";
	var i_code = "";
	for (var I = 0; I < str.length; I++) {
		i_code = str.charCodeAt(I);

		if (i_code == 184) {
			o_code = 1105;
		} else if (i_code == 168) {
			o_code = 1025;
		} else if (i_code > 191 && i_code < 256) {
			o_code = i_code + 848;
		} else {
			o_code = i_code;
		}
		result = result + String.fromCharCode(o_code);
	}
	return result;
}
function getLocation() {
	if (navigator.geolocation) {
		var geolocPERMISSION_DENIED = $.cookie('PERMISSION_DENIED');
		console_logM("getLocation geolocPERMISSION_DENIED");
		console_logM(geolocPERMISSION_DENIED);
		if (typeof geolocPERMISSION_DENIED !== "undefined")
			if (geolocPERMISSION_DENIED == 1)
				return;
		document.cookie = "PERMISSION_DENIED=1;path=/;domain=asia-tires.ru";
		ymaps.ready(vCl_man_location_user.get_city_by_ymaps);
		// navigator.geolocation.getCurrentPosition(showPosition, showError, {
		// timeout : 10000
		// });
	} else {
		s = "Geolocation is not supported by this browser.";
		alert(s);
	}
}

function showPosition(position) {
	ymaps.ready(vCl_man_location_user.get_city_by_ymaps);
}

function showError(error) {
	var s = "";
	switch (error.code) {
	case error.PERMISSION_DENIED:
		s = "Включите геолокацию для лучшего обслуживания ваших запросов. PERMISSION_DENIED";
		document.cookie = "PERMISSION_DENIED=1;path=/;domain=asia-tires.ru";
		break;
	case error.POSITION_UNAVAILABLE:
		// s = "Включите Включите геолокацию для лучшего обслуживания ваших
		// запросов. POSITION_UNAVAILABLE"
		break;
	case error.TIMEOUT:
		// s = "The request to get user location timed out."
		break;
	case error.UNKNOWN_ERROR:
		s = "An unknown error occurred."
		break;
	}
	if (s != "")
		alert(s);
}
function ymaps_geolocationNew() {
	ymaps.ready(init);

	function init() {
		var geolocation = ymaps.geolocation;
		// ,
		// myMap = new ymaps.Map('map', {
		// center: [55, 34],
		// zoom: 10
		// }, {
		// searchControlProvider: 'yandex#search'
		// });

		// Сравним положение, вычисленное по ip пользователя и
		// положение, вычисленное средствами браузера.
		geolocation.get({
			provider : 'yandex',
			mapStateAutoApply : true
		}).then(function(result) {
			// Красным цветом пометим положение, вычисленное через ip.
			result.geoObjects.options.set('preset', 'islands#redCircleIcon');
			result.geoObjects.get(0).properties.set({
				balloonContentBody : 'Мое местоположение'
			});
			// myMap.geoObjects.add(result.geoObjects);
		});

		geolocation.get({
			provider : 'browser',
			mapStateAutoApply : true
		}).then(function(result) {
			// Синим цветом пометим положение, полученное через браузер.
			// Если браузер не поддерживает эту функциональность, метка не будет
			// добавлена на карту.
			result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
			// myMap.geoObjects.add(result.geoObjects);
		});
	}
}
// ===========================================================================================================================
Cl_man_location_user.prototype.get_city_by_ymaps = function() {
	console_logM("Cl_man_location_user get_city_by_ymaps st");
	// ymaps_geolocationNew();
	var th = this;
	var geolocation = ymaps.geolocation;// 18-09-201919:00

	// Определяем адрес по координатам (обратное геокодирование).
	function getAddress(coords) {
		// myPlacemark.properties.set('iconCaption', 'поиск...');
		ymaps
				.geocode(coords)
				.then(
						function(res) {
							var firstGeoObject = res.geoObjects.get(0);
							var place = firstGeoObject.getLocalities().length ? firstGeoObject
									.getLocalities()
									: firstGeoObject.getAdministrativeAreas();
							// place: Array(2)
							// 0: "Севастополь"
							// 1: "Балаклавский район"
							// length: 2
							console_logM("getAddress place=" + place);
							console_logM(place);

							var balloonContent = firstGeoObject
									.getAddressLine();
							// alert(place[0] + " ---" + balloonContent);
							var AdministrativeAreas = firstGeoObject
									.getAdministrativeAreas()
							var Country = firstGeoObject.getCountry()
							var location_ymaps = Country + " "
									+ AdministrativeAreas[0] + " "
									+ AdministrativeAreas[1];
							var t = 1;

							vCl_man_location_user.get_city_by_ymaps_resp(
									place[0], location_ymaps);
						});
	}
	geolocation.get({
		provider : 'yandex',
		mapStateAutoApply : true
	}).then(function(result) {
		var position = result.geoObjects.position;
		console_logM("getAddress geolocation.get  position=");
		console_logM(position);

		console.log(position);
		getAddress(position);
		// // Красным цветом пометим положение, вычисленное через ip.
		// result.geoObjects.options.set('preset', 'islands#redCircleIcon');
		// result.geoObjects.get(0).properties.set({
		// balloonContentBody: 'Мое местоположение'
		// });
		// myMap.geoObjects.add(result.geoObjects);
	});
	geolocation.get({
		provider : 'browser',
		mapStateAutoApply : true
	}).then(function(result) {
		// Синим цветом пометим положение, полученное через браузер.
		// Если браузер не поддерживает эту функциональность, метка не будет
		// добавлена на карту.
		result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
		var position = result.geoObjects.position;
		console_logM("getAddress geolocation.get  position=");
		console_logM(position);

		console.log(position);
		getAddress(position);
		// myMap.geoObjects.add(result.geoObjects);
	}, function(e) {
		console.log(e);
	});

}
// ===========================================================================================================================
Cl_man_location_user.prototype.get_city_by_ymaps_resp = function(data_city,
		location_ymaps) {// 18-09-201919:00
	console_logM("Cl_man_location_user get_city_by_ymaps_resp st");
	var th = this;
	// var data_city = "";
	if (typeof remote_addr === "undefined")
		return;
	console_logM("Cl_man_location_user data++++++++++++++++++");
	console_logM("Cl_man_location_user data_city=" + data_city);

	location_user_city = data_city;
	$(".location_user").html(location_user_city);
	th.location_user_city = data_city;
	th.location_ymaps = location_ymaps;
	// th.location_code_sh = data.location_code_sh;

	$("#modal_location_user_is").modal('show');

}
// ===========================================================================================================================
Cl_man_location_user.prototype.get_city_by_ip = function() {
	console_logM("Cl_man_location_user get_city_by_ip st");
	var th = this;
	var data_city = "";

	if (typeof remote_addr === "undefined")
		return;// remote_addr = "127.0.0.1";

	$
			.getJSON(
					'/sypexgeo/sxgeo_get.php',
					{
						// $.getJSON('http://ipgeobase.ru:7020/geo?ip=195.211.162.92',
						// {
						email : 111111111
					},
					function(data) {
						console_logM("Cl_man_location_user data");
						console_logM(data);
						if (typeof data.city !== "undefined") {
							// data_city = data.city[0];
							data_city = data.city.ip.city;
							console_logM("Cl_man_location_user get_city_by_ip data++++++++++++++++++");
						} else {
							console_logM("Cl_man_location_user get_city_by_ip data*------------------");
							data_city = "Москва";
						}

						console_logM("Cl_man_location_user data++++++++++++++++++");
						console_logM("Cl_man_location_user data_city="
								+ data_city);

						location_user_city = data_city;
						$(".location_user").html(location_user_city);
						th.location_user_city = data_city;
						// th.location_code_sh = data.location_code_sh;

						$("#modal_location_user_is").modal('show');
					})
			.fail(
					function() {
						console_logM("Cl_man_location_user get_city_by_ip fail---------------");
						alert("get_city_by_ip no.");
					});
}
// ===========================================================================================================================
Cl_man_location_user.prototype.set_location_user = function() {
	console_logM("Cl_man_location_user set_location_user st");
	var LOCATION = $.cookie('location_user');
	console_logM("Cl_man_location_user set_location_user LOCATION");
	console_logM(LOCATION);
	$("div.sec1.city-name").html(LOCATION);// old
}
// ===========================================================================================================================
// ===========================================================================================================================

// Cl_man_partner_reg
var Cl_man_partner_reg = function() {
	this.init();
}
// ===========================================================================================================================
Cl_man_partner_reg.prototype.init = function() {
	console_logM("Cl_man_partner_reg init st");

	// $('.header__enter').click(function(e) {
	// console_logM("click Cl_man_partner_reg .header__enter");
	// // $("#modal__auth").modal('show');
	// $("#modal-login").modal('show');
	//
	// e.preventDefault();
	// return false;
	// });

	$('#link_modal-forgot-password').click(function(e) {
		console_logM("click link_modal-forgot-password");
		$("#modal-login").modal('hide');
		$("#modal-forgot-password").modal('show');
		e.preventDefault();
		return false;
	});
	$('#modal_forgotpasswd_close').click(function(e) {
		console_logM("click  - modal_forgotpasswd_close- ");
		$("#modal-forgot-password").modal('hide');
		e.preventDefault();
		return false;
	});
	this.init_modal_btns();

}// ===========================================================================================================================
Cl_man_partner_reg.prototype.init_modal_btns = function() {
	console_logM("Cl_man_partner_reg init_modal_btns st");

	$('#link_modal-forgot-password').click(function(e) {
		console_logM("click link_modal-forgot-password");
		$("#modal-login").modal('hide');
		$("#modal-forgot-password").modal('show');
		e.preventDefault();
		return false;
	});
	$('#modal_forgotpasswd_close').click(function(e) {
		console_logM("click  - modal_forgotpasswd_close- ");
		$("#modal-forgot-password").modal('hide');
		e.preventDefault();
		return false;
	});
	$('#link_modal-register').click(function(e) {
		console_logM("click link_modal-register");
		$("#modal-login").modal('hide');
		$("#modal-register").modal('show');
		e.preventDefault();
		return false;
	});

}// ===========================================================================================================================
Cl_man_partner_reg.prototype.modal_forgotpasswd_close = function(e) {
	console_logM("Cl_man_partner_reg modal_forgotpasswd_close st");
	$("#modal-forgot-password").modal('hide');
	// e.preventDefault();
	return false;
}

// row_order
// ===========================================================================================================================

// Cl_man_row_order
var Cl_man_row_order = function() {
	this.custom_face = "fiz";
	this.custom_face_fiz = "fiz";
	this.custom_face_urid = "urid";
	this.custom_face_fiz_d = 1;
	this.custom_face_urid_d = 2;

	this.checklocationSetOnForm = false;

	this.idPAY_SYSTEM_yandex = "ID_PAY_SYSTEM_ID_3";
	this.idPAY_SYSTEM_sberbank = "ID_PAY_SYSTEM_ID_11";
	this.idPAY_SYSTEM_nalichnymi_kuryeru = "ID_PAY_SYSTEM_ID_1";
	this.idPAY_SYSTEM_ban_kartoy_v_tochke_vydachi = "ID_PAY_SYSTEM_ID_12";

	this.init();

}

// ===========================================================================================================================
Cl_man_row_order.prototype.init_modif = function() {
	console_logM("Cl_man_row_order init_modif st");
	// $("#bx-soa-total").append($(".form-group.bx-soa-location-input-container"));
	if (typeof is_partner === "undefined") {
		$(".row_order_b_right.n2").hide();

	} else {
		$(".row_order_b_right.n2").show();
		$(".row_order_b_right.n2 .row_order_b_right_b4").hide();

	}
	// 16-09-201711:14

}
// ===========================================================================================================================
Cl_man_row_order.prototype.init = function() {
	console_logM("Cl_man_row_order init st");
	this.set_data_order();
	$(".form_order_data_user.fiz").hide();
	$(".form_order_data_user.urid").hide();
	// _marker_t29_05_20209_24=1;//29-05-20209:24
	this.init_btns();
	this.init_modif();
	this.btns_pay_get_checked();
	// //
//	 this.data_user_init(); // d!!! //23-10-201718:28
	this.init_validate();

	if (typeof is_partner !== "undefined") {
		this.data_partner_init();
		$(".wr-strip-order-top").hide();
	}

	// raschet_dostavka
	this.init_modal_raschet_dostavka();
	this.init_diplay_dostavka();

	// .row_order_b_right.n1 > div.row_order_b_right_b3 > button
}
// ===========================================================================================================================
Cl_man_row_order.prototype.init_modal_raschet_dostavka = function() {
	console_logM("Cl_man_row_order init_modal_raschet_dostavka st");
	var th = this;
	// $('.btn_filter_mob').show();
	$('#raschet_dostavka').click(function(e) {
		console_logM("click raschet_dostavka ");
		$("#modal_raschet_dostavka").modal('show');
		e.preventDefault();
		return false;
	});
	$('#btn_raschet_dostavka_ok').click(function(e) {
		console_logM("click btn_raschet_dostavka ");
		$("#modal_raschet_dostavka").modal('hide');
		e.preventDefault();
		return false;
	});
}
// ===========================================================================================================================
Cl_man_row_order.prototype.init_diplay_dostavka = function() {
	console_logM("Cl_man_row_order init_diplay_dostavka st");
	$('.raschet_dostavka_w_v').html(ORDER_WEIGHT_DISP);
	$('.raschet_dostavka_v_v').html(ORDER_OBEM_DISP);
}
// ===========================================================================================================================
Cl_man_row_order.prototype.init_validate = function() {
	console_logM("Cl_man_row_order init_validate st");

	// $(".form_order_data_user.fiz").validate();
	jQuery.validator.methods.matches = function(value, element, params) {
		var re = new RegExp(params);
		// window.console.log(re);
		// window.console.log(value);
		// window.console.log(re.test( value ));
		return this.optional(element) || re.test(value);
	}
	$(".form_order_data_user.fiz")
			.validate(
					{
						rules : {
							// simple rule, converted to {required:true}
							fio_fiz : "required",
							EMail_fiz : {
								required : true,
								email : true
							},
							phone_fiz : {
								required : true,
								matches : "^(\\+|\\d|\\s)+$",
								minlength : 10,
								maxlength : 20
							},
							address_delivery_fiz : "required",

						},
						messages : {
							fio_fiz : "Заполните поле",
							EMail_fiz : {
								required : "Заполните поле",
								email : "Заполните поле email"
							},
							phone_fiz : "Заполните поле",
							address_delivery_fiz : "Заполните поле",
						},
						submitHandler : function(form) {
							console_logM("Cl_man_row_order fiz init_validate submitHandler st");
							// check loc Cl_man_location_user
							if (vCl_man_location_user.islocationSetOnForm())
								//Cl_order_make.man_send();
								$("#bx-soa-orderSave > a")[0].click();
							// bx-ui-sls-fake
							// e.preventDefault();
							// return false;
							// $(form).ajaxSubmit();
						}
					});
	$(".form_order_data_user.urid")
			.validate(
					{
						rules : {
							// simple rule, converted to {required:true}
							name_company : "required",
							iin : "required",
							address_urid : "required",
							kpp : "required",
							EMail : {
								required : true,
								email : true
							},
							phone : {
								required : true,
								matches : "^(\\+|\\d|\\s)+$",
								minlength : 10,
								maxlength : 20
							},
							address_delivery : "required",

						},
						messages : {
							name_company : "Заполните поле",
							iin : "Заполните поле",
							address_urid : "Заполните поле",
							kpp : "Заполните поле",
							EMail : {
								required : "Заполните поле",
								email : "Заполните поле email"
							},
							phone : "Заполните поле",
							address_delivery : "Заполните поле",
						},
						submitHandler : function(form) {
							console_logM("Cl_man_row_order urid init_validate submitHandler st");
							return false;
							// $(form).ajaxSubmit();
						}
					});

}
// ===========================================================================================================================
Cl_man_row_order.prototype.init_btns = function() {
	console_logM("Cl_man_row_order init_btns st");

	this.btns_nav_init();
	this.select_custom_face_init();
	this.select_dost_init();
	this.btns_pay_init();
	this.btns_popul_prod_del_init();
	this.btn_order_make_init();
	$("#loc_n").change(
			function(e) {
				console.log("#bx-soa-region input.bx-ui-sls-fake change "
						+ $(this).val());
				// th.initUpdate($(this).attr("id-item"), $(this).val());
			});

}
// ===========================================================================================================================
Cl_man_row_order.prototype.btns_nav_init = function() {
	console_logM("Cl_man_row_order btns_nav_init st");
	var th = this;
	console_logM(" btns_nav_init th.custom_face 0");
	console_logM(th.custom_face);
	// $('.row_order_b_right.n1 > div.row_order_b_right_b3 > button').hide();
	$('div.row_order_b_right_b3 > button, #link_order_step2').click(
			function(e) {
				console_logM("click Cl_man_row_order n1");
				console_logM("th.custom_face");
				console_logM(th.custom_face);
				$(".row_order_b_right.n1").hide();
				$(".wr_order_popul_prods").hide();
				// $(".form_order_data_user.urid").hide();
				$(".row_order_b_right.n2").show();
				if (th.custom_face == "fiz") {
					$(".form_order_data_user.fiz").show();
				} else {
					$(".form_order_data_user.urid").show();
				}

				$('#link_order_step2').removeClass("passive");
				$('body,html').animate({
					scrollTop : 0
				}, 400);

				e.preventDefault();
				return false;
			});
	$('#link_order_step1').click(function(e) {
		console_logM("click Cl_man_row_order link_order_step1");
		$(".form_order_data_user.fiz").hide();
		$(".form_order_data_user.urid").hide();
		$(".row_order_b_right.n2").hide();

		$(".row_order_b_right.n1").show();
		$(".wr_order_popul_prods").show();
		$('#link_order_step2').addClass("passive");
		e.preventDefault();
		return false;
	});

}
// ===========================================================================================================================
Cl_man_row_order.prototype.select_dost_init = function() {
	console_logM("Cl_man_row_order select_dost_init st");
	// #bx-soa-delivery .bx-soa-pp-company .bx-soa-pp-company-smalltitle
	// dELIVERY_ID

	$("#select_dost").empty();
	$('#bx-soa-delivery-hidden').find(".bx-soa-pp-company").each(
			function(index) {
				var smalltitle_delivery = $(this).find(
						".bx-soa-pp-company-smalltitle").html();
				if (typeof smalltitle_delivery === "undefined") {
					return true;
				}
				console_logM("  select_dost_init smalltitle_delivery");
				console_logM(smalltitle_delivery);
				var inputDELIVERY = $(this).find("input[name=DELIVERY_ID]");
				var idDELIVERY = $(inputDELIVERY).prop("id");
				var checkedDELIVERY = $(inputDELIVERY).prop("checked");
				console_logM("  select_dost_init idDELIVERY");
				console_logM(idDELIVERY);
				console_logM("  select_dost_init checkedDELIVERY");
				console_logM(checkedDELIVERY);
				var selected = "";
				if (checkedDELIVERY || idDELIVERY == "ID_DELIVERY_ID_3")
					selected = "selected";
				$("#select_dost").append(
						$('<option value="' + idDELIVERY + '" ' + selected
								+ '>' + smalltitle_delivery + '</option>'));
			});
	$("#raschet_dostavka").hide();
	$("#select_dost").change(function(e) {
		console_logM("Cl_man_row_order select_dost change");

		var idDELIVERY = $("#select_dost").val();
		console_logM("Cl_man_row_order   idDELIVERY=" + idDELIVERY);
		// #raschet_dostavka скрыть на самовывоз idDELIVERY=ID_DELIVERY_ID_3
		if (idDELIVERY == "ID_DELIVERY_ID_3")
			$("#raschet_dostavka").hide();
		else
			$("#raschet_dostavka").show();
		// $("#"+idDELIVERY).trigger('click');
		$("input[name=DELIVERY_ID]").each(function(index) {
			$(this).prop("checked", false);
		});
		setTimeout(function() {
			console_logM("Cl_man_row_order select_dost_init setTimeout");
			$("#" + idDELIVERY).prop("checked", true);
			$("#" + idDELIVERY).trigger('click');
		}, 1000);
		// $("#" + idDELIVERY).prop("checked", true);
		// $("#" + idDELIVERY).trigger('click');
		setTimeout('get_val_DELIVERY();', 4000);
	});
	console_logM("Cl_man_row_order select_dost_init eeeeeeee");
}
// ===========================================================================================================================
function get_val_DELIVERY() {
	console_logM("get_val_DELIVERY");
	var val = $("input[name=DELIVERY_ID]").val();
	;
	console_logM("get_val_DELIVERY  val");
	console_logM(val);

}

// ===========================================================================================================================
Cl_man_row_order.prototype.data_user_init = function() {
	console_logM("Cl_man_row_order data_user_init st");
//	 return 0; //d++ 18-09-201919:00 
	$("#fio_fiz").val("ДАННЫЕ");
	$("#EMail_fiz").val("supportk130@gmail.com");
	$("#phone_fiz").val("+79780863181");
	$("#address_delivery_fiz").val("ДАННЫЕДАННЫЕ");
	$("#textAreaComent_fiz").val("ДАННЫЕ");

	$("#name_company").val("name_company");
	$("#iin").val("iin");
	$("#address_urid").val("address_urid");
	$("#kpp").val("kpp");
	$("#EMail").val("supportk130@gmail.com");
	$("#phone").val("+79780863181");
	$("#fax").val("fax");
	$("#address_delivery").val("address_delivery");

}
// ===========================================================================================================================
Cl_man_row_order.prototype.data_partner_init = function() {
	console_logM("Cl_man_row_order data_partner_init st");

	$("#fio_fiz").val(fio_fiz);
	$("#EMail_fiz").val(EMail_fiz);
	$("#phone_fiz").val(phone_fiz);
	$("#address_delivery_fiz").val(address_delivery_fiz);
	// $("#textAreaComent_fiz").val("textAreaComent_fiz");

}

// ===========================================================================================================================
Cl_man_row_order.prototype.set_user_data_to_orig_form = function() {
	console_logM("Cl_man_row_order set_user_data_to_orig_form st");
	// Ф.И.О. ORDER_PROP_1
	//  E-Mail ORDER_PROP_2
	// Телефон ORDER_PROP_3
	// Адрес доставки ORDER_PROP_7 $("#fio_fiz").val("fio");
	if (this.custom_face == "fiz") {

		$("input[name=ORDER_PROP_1]").val($("#fio_fiz").val());
		$("input[name=ORDER_PROP_2]").val($("#EMail_fiz").val());
		$("input[name=ORDER_PROP_3]").val($("#phone_fiz").val());
		$("textarea[name=ORDER_PROP_7]").val($("#address_delivery_fiz").val());
		// $("#orderDescription").text($("#textAreaComent_fiz").text());
		$("#orderDescription").val($("#textAreaComent_fiz").val());

		// $("input[name=ORDER_PROP_12]").val("Контактное лицо");
	} else {
		$("input[name=ORDER_PROP_8]").val($("#name_company").val());
		$("input[name=ORDER_PROP_10]").val($("#iin").val());
		$("input[name=ORDER_PROP_9]").val($("#address_urid").val());
		$("input[name=ORDER_PROP_11]").val($("#kpp").val());
		$("input[name=ORDER_PROP_12]").val("Контактное лицо");
		$("input[name=ORDER_PROP_13]").val($("#EMail").val());
		$("input[name=ORDER_PROP_14]").val($("#phone").val());
		$("input[name=ORDER_PROP_15]").val($("#fax").val());
		$("textarea[name=ORDER_PROP_19]").val($("#address_delivery").val());
	}

	f_JS_CALLBACK();

	// 8 Название компании COMPANY
	// 9 Юридический адрес COMPANY_ADR
	// 10 ИНН INN
	// 11 КПП KPP
	// 12 Контактное лицо CONTACT_PERSON
	// 13 E-Mail EMAIL
	// 14 Телефон PHONE
	// 15 Факс FAX
	// 16 Индекс ZIP
	// 17 Город CITY
	// 18 Местоположение LOCATION
	// 19 Адрес доставки ADDRESS
	// name_company ORDER_PROP_8 * Название компании
	// iin ORDER_PROP_10 ИНН
	// address_urid ORDER_PROP_9 Юридический адрес
	// kpp ORDER_PROP_11 КПП
	// EMail ORDER_PROP_13 * E-Mail
	// phone ORDER_PROP_14 Телефон
	// fax ORDER_PROP_15 Факс
	// address_delivery ORDER_PROP_19 * Адрес доставки

}

// ===========================================================================================================================
Cl_man_row_order.prototype.btn_order_make_init = function() {
	console_logM("Cl_man_row_order btn_order_make_init st");
	var th = this;
	$('#order_make').click(function(e) {
		console_logM("click Cl_man_row_order order_make");
		console_logM("click Cl_man_row_order order_make this.custom_face");
		console_logM(th.custom_face);
		th.set_user_data_to_orig_form();
		if (th.custom_face == "fiz") {
			th.checklocationSetOnForm = true;
			$(".form_order_data_user.fiz").submit();

		} else {
			$(".form_order_data_user.urid").submit();
		}

		// $( "form[name=ORDER_FORM]" ).submit();
		// $( "#bx-soa-orderSave > a" )[0].click();
		e.preventDefault();
		return false;
	});

}

// ===========================================================================================================================
Cl_man_row_order.prototype.select_custom_face_init = function() {
	console_logM("Cl_man_row_order select_custom_face_init st");
}
// ===========================================================================================================================
Cl_man_row_order.prototype.btns_popul_prod_del_init = function() {
	console_logM("Cl_man_row_order btns_popul_prod_del_init st");
	var th = this;
	$('.wr_order_popul_prods')
			// .find(".popul_prod,.popul_prod-s")
			.find(".popul_prod_del")
			.each(
					function(index) {
						console_logM("btns_popul_prod_del_init  index");
						console_logM(index);
						var IDcur = $(this).parents(
								".popul_prod,.popul_prod-s ").prop("id");
						IDcur = IDcur.replace(prefIDcur, "");
						console_logM("btns_popul_prod_del_init  IDcur  00");
						console_logM(IDcur);

						$(this)
								.click(
										function(e) {
											console_logM("Cl_man_row_order btns_popul_prod_del_init click"
													+ IDcur);
											th.prod_order_del(IDcur);// 22-12-202010:11

											setTimeout(
													function() {
														console_logM("Cl_man_basketItemgetQuantity initUpdate PopupWindowManager");
														document
																.getElementById("hellopreloader").style.display = "block";
														document
																.getElementById("hellopreloader_preload").style.display = "block";
													}, 500);
											// document.location.href =
											// uri.href();
											e.preventDefault();
											return false;
										});
					});
	console_logM("Cl_man_row_order btns_popul_prod_del_init eeeeeeeeee");

}
// ===========================================================================================================================
Cl_man_row_order.prototype.prod_order_del = function(IDcur) {
	console_logM("Cl_man_row_order prod_order_del st");
	$.getJSON('/include/del_prod_order.php', {
		basket_product_id : IDcur
	}, function(data) {
		console_logM("prod_order_del data");
		console_logM(data);
		if (typeof data.num_product !== "undefined") {
			console_logM("prod_order_del data++++++++++++++++++");
		} else {
			console_logM("prod_order_del data*------------------");
		}
	}).fail(function() {
		console_logM("prod_order_del error-------------- ");
		// alert("Покупка невозможна.");
	}).always(function() {
		console_logM("prod_order_del finished");
		document.location.href = uri.href();
	});

}
// ===========================================================================================================================
Cl_man_row_order.prototype.endLoader = function() {
	console_logM("Cl_man_row_order endLoader st");
	this.set_new_data_order();//
}
// ===========================================================================================================================
Cl_man_row_order.prototype.set_new_data_order = function() {
	console_logM("Cl_man_row_order set_new_data_order st");
	this.btns_pay_get_checked();

}
// ===========================================================================================================================
Cl_man_row_order.prototype.set_data_order = function() {
	console_logM("Cl_man_row_order set_data_order st");
	var sum_order = sPRICE_WITHOUT_DISCOUNT_VALUE;
	console_logM("set_data_order sum_order");
	console_logM(sum_order);

	var sum_order_all = sORDER_TOTAL_PRICE;
	console_logM("set_data_order sum_order_all");
	console_logM(sum_order_all);

	$('.skidka_order').html(sDISCOUNT_PRICE);
	$('.row_order_b_right.n1	.sum_order').html(sum_order);
	$('.sum_order_all,.row_order_b_right.n2 .sum_order').html(sum_order_all);

}

// ===========================================================================================================================
Cl_man_row_order.prototype.btns_pay_init = function() {
	console_logM("Cl_man_row_order btns_pay_init st");
	var th = this;
	// pay_yandexbtns
	$('#pay_yandex').click(function(e) {
		console_logM("click  pay_yandex");
		$("input[name=PAY_SYSTEM_ID]").filter(':checked').prop("id");
		$("input[name=PAY_SYSTEM_ID]").each(function(index) {
			$(this).prop("checked", false);
		});

		setTimeout(function() {
			console_logM("Cl_man_row_order btns_pay_init setTimeout");
			$("#" + th.idPAY_SYSTEM_yandex).prop("checked", true);
			$("#" + th.idPAY_SYSTEM_yandex).trigger('click');
		}, 1000);

		e.preventDefault();
		return false;
	});
	$('#pay_sberbank').click(function(e) {
		console_logM("click  pay_sberbank");
		$("input[name=PAY_SYSTEM_ID]").each(function(index) {
			$(this).prop("checked", false);
		});

		setTimeout(function() {
			console_logM("Cl_man_row_order btns_pay_init setTimeout");
			$("#" + th.idPAY_SYSTEM_sberbank).prop("checked", true);
			$("#" + th.idPAY_SYSTEM_sberbank).trigger('click');
		}, 1000);

		e.preventDefault();
		return false;
	});
	$('#pay_nalichnymi_kuryeru').click(function(e) {
		console_logM("click  pay_nalichnymi_kuryeru");
		$("input[name=PAY_SYSTEM_ID]").each(function(index) {
			$(this).prop("checked", false);
		});

		setTimeout(function() {
			console_logM("Cl_man_row_order btns_pay_init setTimeout");
			$("#" + th.idPAY_SYSTEM_nalichnymi_kuryeru).prop("checked", true);
			th.btns_pay_get_checked();// _marker_t29_05_20209_24=1;//29-05-20209:24
			// $("#" +
			// th.idPAY_SYSTEM_nalichnymi_kuryeru).trigger('click');//_marker_t29_05_20209_24=1;//29-05-20209:24
		}, 1000);

		e.preventDefault();
		return false;
	});

	$('#pay_ban_kartoy_v_tochke_vydachi').click(
			function(e) {
				console_logM("click  pay_ban_kartoy_v_tochke_vydachi");
				$("input[name=PAY_SYSTEM_ID]").each(function(index) {
					$(this).prop("checked", false);
				});

				setTimeout(function() {
					console_logM("Cl_man_row_order btns_pay_init setTimeout");
					$("#" + th.idPAY_SYSTEM_ban_kartoy_v_tochke_vydachi).prop(
							"checked", true);
					th.btns_pay_get_checked();// _marker_t29_05_20209_24=1;//29-05-20209:24
					// $("#" +
					// th.idPAY_SYSTEM_ban_kartoy_v_tochke_vydachi).trigger('click');//_marker_t29_05_20209_24=1;//29-05-20209:24
				}, 1000);

				e.preventDefault();
				return false;
			});

}
// ===========================================================================================================================
Cl_man_row_order.prototype.btns_pay_get_checked = function() {
	console_logM("Cl_man_row_order btns_pay_get_checked st");
	var PAY_SYSTEM_IDchecked = $("input[name=PAY_SYSTEM_ID]")
			.filter(':checked').prop("id");
	if (typeof PAY_SYSTEM_IDchecked === "undefined") {
		PAY_SYSTEM_IDchecked = this.idPAY_SYSTEM_nalichnymi_kuryeru;
	}

	console_logM("btns_pay_get_checked PAY_SYSTEM_IDchecked");
	console_logM(PAY_SYSTEM_IDchecked);
	if (PAY_SYSTEM_IDchecked == this.idPAY_SYSTEM_yandex) {
		$('#pay_yandex').addClass("active");
	} else {
		$('#pay_yandex').removeClass("active");
	}
	if (PAY_SYSTEM_IDchecked == this.idPAY_SYSTEM_sberbank) {
		$('#pay_sberbank').addClass("active");
	} else {
		$('#pay_sberbank').removeClass("active");
	}
	if (PAY_SYSTEM_IDchecked == this.idPAY_SYSTEM_nalichnymi_kuryeru) {
		$('#pay_nalichnymi_kuryeru').addClass("active");
	} else {
		$('#pay_nalichnymi_kuryeru').removeClass("active");
	}
	if (PAY_SYSTEM_IDchecked == this.idPAY_SYSTEM_ban_kartoy_v_tochke_vydachi) {
		$('#pay_ban_kartoy_v_tochke_vydachi').addClass("active");
	} else {
		$('#pay_ban_kartoy_v_tochke_vydachi').removeClass("active");
	}
	// alert($('#pay_sberbank').prop("class")+"**********"+$('#pay_yandex').prop("class"));

}

// ===========================================================================================================================

// Cl_man_uri
var Cl_man_uri = function() {
	this.init();
}
// ===========================================================================================================================
Cl_man_uri.prototype.init = function() {
	console_logM("Cl_man_uri init");
	var hostL = uri.host(); //  
	console_logM("Cl_man_uri.prototype.init init hostL");
	console_logM(hostL);

	if (uri.host() == http_loc || uri.host() == http_loc_full
			|| uri.host() == http_loc2 || uri.host() == http_loc_full2) {

		is_http_loc = true;
	}
	var strSearch = "loc";
	var patt = new RegExp(strSearch);
	var res = patt.exec(uri.host());
	if (res != null) {
		is_http_loc = true;
	}

	uri.removeSearch("del_filter");
	this.fix_price();
	this.cookie_clear();
	// uri trnsform num_auto_list_ans // 19-09-201913:17
	// uri.addSearch("num_auto_list_ans", "1");//num_auto_list_ans=1

}
// ===========================================================================================================================
Cl_man_uri.prototype.cookie_clear = function() {
	console_logM("Cl_man_uri cookie_clear");
	if (uri.hasQuery("cookie_clear") === true) {
		console_logM("Cl_man_uri cookie_clear*****");
		$.removeCookie('location_user', {
			path : '/'
		});
		$.removeCookie('location_code', {
			path : '/'
		});
		$.removeCookie('location_code_sh', {
			path : '/'
		});
	}
}
// ===========================================================================================================================
Cl_man_uri.prototype.fix_price = function() {
	console_logM("Cl_man_uri fix_price");
	if (uri.hasQuery("arrFilter_P20_MIN") === true) {
		$('#arrFilter_P20_MIN').val(result_uri_vars.arrFilter_P20_MIN);
	}
	if (uri.hasQuery("arrFilter_P20_MAX") === true) {
		$('#arrFilter_P20_MAX').val(result_uri_vars.arrFilter_P20_MAX);
	}
}
// ===========================================================================================================================
// ===========================================================================================================================
var Cl_man_list_brends = function() {
	this.init();// 10-10-201919:57
}
// ===========================================================================================================================
Cl_man_list_brends.prototype.init = function() {
	console_logM("Cl_man_list_brends init st");
	$("#btn_brend_more").click(function(e) {
		console_logM("click btn_brend_more");
		$('.wr_brend').each(function(index) {
			$(this).css("display", "inline-block");
		});
		$('.wr_btn_brend_more').css("display", "none");
		e.preventDefault();
		return false;
	});
	if (jQuery("html").has(".body_mob ").length) {
		$('.wr_brend').each(function(index) {
			if (index > 2)
				$(this).css("display", "none");
		});
	}
	man_owlCarouselListBrends();
}
// ===========================================================================================================================
// ===========================================================================================================================
var Cl_man_sizes_popul = function() {
	this.init();// 11-10-201920:45
}
// ===========================================================================================================================
Cl_man_sizes_popul.prototype.init = function() {
	console_logM("Cl_man_sizes_popul init st");
	if (jQuery("html").has(".body_mob ").length) {
		$(".wr_btn_sizes_popul_more_m").css("display", "block");
		$('.wr_col_dias').each(function(index) { // 23-10-20189:07
			if (index > 2)
				$(this).css("display", "none");
		});
		$("#btn_sizes_popul_more").click(function(e) {
			console_logM("click btn_sizes_popul_more");
			$('.wr_col_dias').each(function(index) {
				$(this).css("display", "block");
			});
			$('.wr_btn_sizes_popul_more_m').css("display", "none");
			e.preventDefault();
			return false;
		});
	}

}

// ===========================================================================================================================

// btns_nav
var Cl_man_cat_page_btns_nav = function() {
	this.btn_left = ".btn-page-left";
	this.btn_right = ".btn-page-right";
	// btn-page-left btn-page-right
	this.init();

}
// ===========================================================================================================================
Cl_man_cat_page_btns_nav.prototype.init = function() {
	console_logM("Cl_man_cat_page_btns_nav init st");
	if (jQuery("body").has("li.bx-pag-prev > a").length) {
		$(this.btn_left).click(function(e) {
			console_logM("click this.btn_left");
			$('li.bx-pag-prev > a')[0].click();
			e.preventDefault();
			return false;
		});
	} else {
		$(this.btn_left).css("visibility", "hidden")
	}
	if (jQuery("body").has("li.bx-pag-next > a").length) {
		$(this.btn_right).click(function(e) {
			console_logM("click this.btn_left");
			$('li.bx-pag-next > a')[0].click();
			e.preventDefault();
			return false;
		});
	} else {
		$(this.btn_right).css("visibility", "hidden")
	}

	if (jQuery("body").has("div.bx-pagination  li.bx-active span").length) {
		var num_cur_page = $("div.bx-pagination  li.bx-active span").html();
		$('.num-cur-page').html(num_cur_page);
	}
}
// ===========================================================================================================================

// btns_view
var Cl_man_cat_page_btns_view = function() {
	this.pic_full_act = "/img/btn-view-full-act.png";
	this.pic_full_pasiv = "/img/btn-view-full-pasiv.png";
	this.pic_short_act = "/img/btn-view-short-act.png";
	this.pic_short_pasiv = "/img/btn-view-short-pasiv.png";

	// btn-p btn-view-grid
	// btn-p btn-view-full

	this.init();

}
// ===========================================================================================================================
Cl_man_cat_page_btns_view.prototype.init = function() {
	console_logM("Cl_man_cat_page_btns_view init st");
	this.init_img();
	this.init_btns();
}
// ===========================================================================================================================
Cl_man_cat_page_btns_view.prototype.init_btns = function() {
	console_logM("Cl_man_cat_page_btns_view init_btns st");
	if (result_uri_vars.view == "full") {
		prod_css = ".popul_prod-s";
	}
	console_logM("init_btns prod_css");
	console_logM(prod_css);

	// man_bg man_cat_page_btns_view
	$('.btn-view-grid').click(function(e) {
		console_logM("click btn-view-grid");
		var viewNeed = "grid";
		if (uri.hasQuery("view") === true) {
			uri.setSearch("view", viewNeed);
		} else {
			uri.addSearch("view", viewNeed);
		}
		document.location.href = uri.href();
		e.preventDefault();
		return false;
	});

	$('.btn-view-full').click(function(e) {
		console_logM("click btn-view-full");
		var viewNeed = "full";
		if (uri.hasQuery("view") === true) {
			uri.setSearch("view", viewNeed);
		} else {
			uri.addSearch("view", viewNeed);
		}
		document.location.href = uri.href();
		e.preventDefault();
		return false;
	});
}
// ===========================================================================================================================
Cl_man_cat_page_btns_view.prototype.init_img = function() {
	console_logM("Cl_man_cat_page_btns_view init_img st");
	if (uri.hasQuery("view") === true) {
		if (result_uri_vars.view == "full") {
			$('.btn-view-full img').prop("src", this.pic_full_act);
			$('.btn-view-grid img').prop("src", this.pic_short_pasiv);
		} else {
			$('.btn-view-full img').prop("src", this.pic_full_pasiv);
			$('.btn-view-grid img').prop("src", this.pic_short_act);
		}
	} else {
		$('.btn-view-full img').prop("src", this.pic_full_act);
		$('.btn-view-grid img').prop("src", this.pic_short_pasiv);
	}
}

// ===========================================================================================================================
//
var Cl_man_partner = function() {
	console_logM("man_partner_init st");
	this.namId_line_var = "line_var";
	this.ar_products_in_basket = [];
	this.man_partner_init_menu();
	if (jQuery("body").has(".page-cat").length) {
		// console_logM("man_partner_init is_partner=");
		// console_logM(is_partner);
		if (typeof is_partner !== "undefined") {
			this.man_partner_init();
		}
	}
	this.init_popup_ans();
	this.man_partner_img_cat_popup();
	if (typeof is_partner !== "undefined") {
		this.btns_wr_popul_prod_del_init();
		this.get_products_in_basket();
	}
}
// ===========================================================================================================================
Cl_man_partner.prototype.man_partner_img_cat_popup = function() {
	console_logM("man_partner_img_cat_popup st");
	$('.popup-link').each(function(index) { // 23-10-20189:07
		$(this).magnificPopup({
			type : 'image'
		// other options
		});

	});
}

// ===========================================================================================================================
Cl_man_partner.prototype.man_partner_init_menu = function() {
	console_logM("man_partner_init_menu st");
	return (false);
	var itenMenuT = $('ul.hidden-xs li').html();

	$('#menuVertical > ul').append('<li class="depth_level1 "> </li>');
	$('#menuVertical > ul li:last').html(itenMenuT);

	$('#menuVertical > ul li:last a').click(function(e) {
		console_logM("click man_partner_init_menu");
		// $("#modal__auth").modal('show');
		// $("#modal-login").modal('show');
		$('.menu-burger').trigger('click');
		if ($(this).prop("href") == "#") {
			e.preventDefault();
			return false;
		}

	});
	// $('#menuVertical > ul').attr('style', 'text-align:center!important');
	if (typeof is_partner === "undefined") {

	} else {

	}

}
// ===========================================================================================================================
Cl_man_partner.prototype.man_partner_init = function() {
	console_logM("Cl_man_partner man_partner_init st");
	var th = this;
	$(".call-links").attr('style', 'display:none !important;');
	$(".wr_btn_partner_buy").css('display', 'block');
	$('.input_quant').each(function(index) {// 23-10-201718:28
		$(this).focusout(function() {// 18-10-201820:11
			console_logM("input_quant focusout fired");
			th.can_partner_basket_add($(this), 0);
			// focus++;
			// $("#focus-count").text("focusout fired: " + focus + "x");
		});
		$(this).focusin(function() {
			quantityToBasket_G = $(this).val();
		});

	});

	$('.btn_quant.btn_minus').each(
			function(index) {
				$(this).click(
						function(e) {
							console_logM("click btn_minus");
							th.can_partner_basket_add($(this), -1);
							return;
							// diski old
							var QUANTITY_clean = $($(this).parents("tr")).find(
									'.QUANTITY_clean').html();
							QUANTITY_clean = parseInt(QUANTITY_clean);
							if (isNaN(QUANTITY_clean))
								QUANTITY_clean = 0;
							var input_quant = $(this).parents("tr").find(
									"input.input_quant");
							var COUNT_t = parseInt($(input_quant).val());
							if (isNaN(COUNT_t))
								COUNT_t = 0;
							if (COUNT_t != 0) {
								$(input_quant).val(COUNT_t - 1);
								// th.man_partner_set_PRICE_All($(this).parents(
								// "tr"));
							}
						});

			});

	$('.btn_quant.btn_plus').each(
			function(index) {
				$(this).click(
						function(e) {
							console_logM("click btn_plus");

							th.can_partner_basket_add($(this), 1);
							return;
							// diski old
							var QUANTITY_clean = $($(this).parents("tr")).find(
									'.QUANTITY_clean').html();
							QUANTITY_clean = parseInt(QUANTITY_clean);
							if (isNaN(QUANTITY_clean))
								QUANTITY_clean = 0;
							var input_quant = $(this).parents("tr").find(
									"input.input_quant");
							var COUNT_t = parseInt($(input_quant).val());
							if (isNaN(COUNT_t))
								COUNT_t = 0;
							if (COUNT_t < QUANTITY_clean) {
								$(input_quant).val(COUNT_t + 1);
								// th.man_partner_set_PRICE_All($(this).parents(
								// "tr"));
							}
						});
			});

	$('.btn_partner_buy').click(function(e) {// 23-10-201718:28
		console_logM("click btn_partner_buy");
		th.partner_buy();
	});

	$('.btn-download').click(function(e) {
		console_logM("click download");

		var uriT = uri.clone();
		uriT.addSearch("excel", 1);
		document.location.href = uriT.href();

		// th.TSENOVOY_SEGMENT_init_link(0, e);//???
	});

	$('.btn-print').click(function(e) {
		console_logM("click print");
		$(".printable").print();
		return (false);
	});
	console_logM("man_partner_init btn-yml");

	$('.btn-yml').click(
			// 20-12-201712:03 20-12-201712:03
			function(e) {
				console_logM("click btn-yml");
				// console_logM(uri.host()+"/bitrix/catalog_export/yml.php");
				window.open("http://" + uri.host()
						+ "/bitrix/catalog_export/yml.php", '_blank');
				return (false);
			});

	$('.btn-yml_opt').click(
			// 20-12-201712:03 20-12-201712:03
			function(e) {
				console_logM("click btn-yml_opt");
				// console_logM(uri.host()+"/bitrix/catalog_export/yml.php");
				window.open("http://" + uri.host()
						+ "/bitrix/catalog_export/yml_opt.php", '_blank');
				return (false);
			});

}

// ===========================================================================================================================
Cl_man_partner.prototype.can_partner_basket_add = function(el, k) { // 18-10-201820:11
	console_logM("Cl_man_partner can_partner_basket_add st");
	if (k != 0) {
		el = $(el).parents("tr").find(".input_quant");
		quantityToBasket_G = $(el).val();
	}
	var ind_sklad = $(el).parents("tr").find(".ind_sklad").val();
	var COUNT_in_basket = 0;
	val = $(el).val();
	if (val == "")
		val = 0;
	console_logM("Cl_man_partner can_partner_basket_add val");
	console_logM(val);
	var COUNT_to_basket = parseInt(val) + k;
	if (COUNT_to_basket < 0)
		return false;
	if (typeof this.ar_products_in_basket[id_prod + "_" + ind_sklad] !== "undefined") {
		COUNT_in_basket = this.ar_products_in_basket[id_prod + "_" + ind_sklad];
	}
	var strCOUNT_on_sklad = $(el).parents("tr").find("td.num-prod").html();
	if (typeof strCOUNT_on_sklad === "undefined") {
		strCOUNT_on_sklad = $(el).parents("tr").find(".COUNT_on_sklad").val();
		COUNT_in_basket = 0;
	}

	var COUNT_on_sklad = parseInt(strCOUNT_on_sklad);
	var str_id_prod = $(el).parents("tr").find(".id_prod").val();
	var id_prod = parseInt(str_id_prod);
	if ((COUNT_on_sklad - COUNT_in_basket) < COUNT_to_basket) {
		$(el).val(quantityToBasket_G);
		nam_prod = $(el).parents("tr").find("td.nam-prod").text();
		alert("Такого количества данного товара " + nam_prod
				+ " на складе нет.");
		return false;
	}
	$(el).val(COUNT_to_basket);
	return true;
}

// ===========================================================================================================================
Cl_man_partner.prototype.get_products_in_basket = function() { // 18-10-201820:11
	console_logM("Cl_man_partner get_products_in_basket st");
	var th = this;
	var str_data = "";

	console_logM("get_products_in_basket str_data");
	console_logM(str_data);
	// return;//d++
	$
			.getJSON(
					'/include/get_products_in_basket.php',// 18-10-201820:11
					{
						str_data : str_data
					},
					function(data) {
						console_logM("get_products_in_basket data");
						console_logM(data);
						$
								.each(
										data,
										function(key, value) {
											// if (nameCityNear ==
											// "")nameCityNear = key;
											console
													.log('get_products_in_basket   Свойство: '
															+ key
															+ '; Значение: '
															+ value);
											try {
												th.ar_products_in_basket[key
														+ "_" + value[0]] = value[1];
											} catch (err) {
												console_logM("get_products_in_basket catch!!!!!!!! ");
												console_logM(err);
											}
										});
						console_logM("Cl_man_partner get_products_in_basket this.ar_products_in_basket");
						console_logM(th.ar_products_in_basket);
					}).fail(function() {
				console_logM("partner_buy error-------------- ");
				alert("get_products_in_basket.fail");
			}).always(function() {
				console_logM("get_products_in_basket finished");
			});

}

// ===========================================================================================================================
Cl_man_partner.prototype.partner_buy = function() {// 23-10-201718:28
	console_logM("Cl_man_partner partner_buy st");
	var th = this;
	var str_data = th.get_product_to_buy();// 18-10-201820:11 // 25-07-2019

	console_logM("partner_buy str_data");
	console_logM(str_data);
	// return;//d++
	$.getJSON('/include/partner_buy.php', {
		str_data : str_data
	}, function(data) {
		console_logM("partner_buy data");
		console_logM(data);
		if (typeof data.num_product !== "undefined") {
			console_logM("partner_buy data++++++++++++++++++");
			th.partner_buy_processing_ans(data.num_product, data.price);
			th.get_products_in_basket();
		} else {
			console_logM("partner_buy data*------------------");
			alert("Покупка невозможна.");
		}
	}).fail(function() {
		console_logM("partner_buy error-------------- ");
		alert("Покупка невозможна.");
	}).always(function() {
		console_logM("partner_buy finished");
	});

}
// ===========================================================================================================================
Cl_man_partner.prototype.get_product_to_buy = function() {// 23-10-201718:28//
	// 25-07-2019
	console_logM("Cl_man_partner get_product_to_buy st");
	var th = this;
	var str_data = "";

	var ind_sklad = 466;
	str_data += product_id + ":" + quantityT_G + ":" + ind_sklad + "^";// //
	// 25-07-2019
	return str_data;
}
// ===========================================================================================================================
Cl_man_partner.prototype.get_product_to_buyOld = function() {// 23-10-201718:28
	console_logM("Cl_man_partner get_product_to_buy st");
	var th = this;
	var str_data = "";
	$('.input_quant').each(function(index) {
		var num_prod = parseInt($(this).val());
		if (isNaN(num_prod))
			num_prod = 0;
		if (num_prod > 0) {
			var tr_prod = $(this).parents("tr");
			var id_prod = $(tr_prod).find("input.id_prod").val();
			var ind_sklad = $(tr_prod).find("input.ind_sklad").val();
			str_data += id_prod + ":" + num_prod + ":" + ind_sklad + "^";//
		}

	});
	return str_data;
}

// ===========================================================================================================================
Cl_man_partner.prototype.partner_buy_processing_ans = function(num_product,
		sum_order) {// 23-10-201718:28
	console_logM("Cl_man_partner partner_buy_processing_ans st");
	this.set_basket_small(num_product, sum_order);
	this.reset_view();
	vCl_man_partner.get_product_data(product_id);
	// this.make_popup_ans();
}
// ===========================================================================================================================
Cl_man_partner.prototype.set_basket_small = function(num_product, sum_order) {// 23-10-201718:28
	console_logM("Cl_man_partner set_basket_small st");
	// div.top-right-basket > a
	$('.top-right-basket > a').html(parseInt(sum_order) + vSign);
	$('.num-prods').html(parseInt(num_product));
}
// ===========================================================================================================================
Cl_man_partner.prototype.reset_view = function() {// 23-10-201718:28
	console_logM("Cl_man_partner reset_view st");
	$('.input_quant').each(function(index) {
		$(this).parents("tr").find('.PRICE_All').html("0" + vSign);
		$(this).val(0);
	});
}
// ===========================================================================================================================
function InitPopupWindowM(visual_ID, successful) {
	console_logM("InitPopupWindowM st++++++++++++++++++++");
	console_logM("InitPopupWindowM visual_ID");
	console_logM(visual_ID);
	console_logM("InitPopupWindowM successful");
	console_logM(successful);
	if (!successful) {
		alert("Покупка невозможна.");
		return
// qqqqqqqqqqqqqqqq
	}
	var obT = eval("ob" + visual_ID);
	console_logM("InitPopupWindowM obT");
	console_logM(obT);
	console_logM(obT.product.id);
	var product_id = obT.product.id
	// alert(obT.product.id);

	$("[id$='_" + visual_ID + "']").hide();
	$(".modal-open .modal").attr('style', 'z-index: 1111');
	$("#modal_new_buy_end").attr('style', 'z-index: 1111');

	$("#modal_new_buy_end").modal('show');// d
	setTimeout(function() {
		console_logM("InitPopupWindowM setTimeout");
		// $("[id$='_" + visual_ID + "']").hide();
		$(".popup-window-close-icon").trigger('click');
		// $("[id$='_" + visual_ID + "']").attr('style', 'height: 10px');
	}, 1000);
	vCl_man_partner.get_product_data(product_id);
	// obabx_1632204109_1246
}
// ===========================================================================================================================
Cl_man_partner.prototype.get_product_data = function(product_id) {// 23-10-201718:28//
	// 25-07-2019
	console_logM("Cl_man_partner get_product_data st");
	var th = this;
	// get_product_data.php 10-07-201822:09
	$.getJSON('/include/get_product_data.php', {
		product_id : product_id
	}, function(data) {
		console_logM("get_product_data data");
		console_logM(data);
		if (typeof data.ans !== "undefined") {
			console_logM("get_product_data data++++++++++++++++++");
			th.make_popup_ans(data.ar_res);
		} else {
			console_logM("get_product_data data*------------------");
			alert("Покупка невозможна.");
		}
	}).fail(function() {
		console_logM("get_product_data error-------------- ");
		alert("Покупка невозможна.");
	}).always(function() {
		console_logM("get_product_data finished");
	});
}
// ===========================================================================================================================
Cl_man_partner.prototype.make_popup_ans = function(product_data) {// 23-10-201718:28
	// 10-07-201822:09

	console_logM("Cl_man_partner make_popup_ans st");
	if (product_data != null) {

		$('#modal_new_buy_end .wr_img  > img	').prop("src",
				product_data.PICT.SRC);
		$('#modal_new_buy_end .MODEL_modal').html(product_data.MODEL);
		var name_modal = "";

		if (product_data.SHIRINA != "") {
			$('#modal_new_buy_end .popul_prod_line4-right ').show();
			$('#modal_new_buy_end .BREND_modal').html(product_data.BREND);
			name_modal = product_data.SHIRINA + "/" + product_data.PROFIL + " "
					+ product_data.DIAMETR;
			$('#modal_new_buy_end .INDEKS_NAGRUZKI_modal').html(
					product_data.INDEKS_NAGRUZKI);
			$('#modal_new_buy_end .INDEKS_SKOROSTI_modal').html(
					product_data.INDEKS_SKOROSTI);
		} else {
			$('#modal_new_buy_end .popul_prod_line4-right ').hide();
			$('#modal_new_buy_end .BREND_modal').html(
					product_data.PROIZVODITEL_DISKOV);
			name_modal += product_data.DIAMETR_DISKA;
			name_modal += "” ";
			name_modal += product_data.SHIRINA_OBODA;
			name_modal += "  PCD ";
			name_modal += product_data.KREPEZHNYE_OTVERSTIYA_PCD;
			name_modal += "  ET ";
			name_modal += product_data.VYLET_DISKA_V_MM_ET;
			name_modal += "  DIA ";
			name_modal += product_data.STUPITSA_DIA;
		}
		product_data.VES = product_data.VES.replace(",", ".");
		product_data.OBEM = product_data.OBEM.replace(",", ".");
		$('#modal_new_buy_end .name_modal').html(name_modal);
		$('#modal_new_buy_end .quantity_modal').html(quantityT_G);
		$('#modal_new_buy_end .VES_modal').html(product_data.VES * quantityT_G);// 10-07-201822:09
		$('#modal_new_buy_end .OBEM_modal').html(
				product_data.OBEM * quantityT_G);
		$('#modal_new_buy_end .price_modal').html(priceT_G + vSign);

	} else {
		$('#modal_new_buy_end  .tit_main').hide();
		$('#modal_new_buy_end  .tit_ax').show();
		$('#modal_new_buy_end  div.modal-body > div.container-fluid').hide();
	}
	$("#modal_new_buy_end").modal('show');

}
// ===========================================================================================================================
Cl_man_partner.prototype.init_popup_ans = function() {// 23-10-201718:28
	console_logM("Cl_man_partner init_popup_ans st");
	$('#btn_to_basket').click(function(e) {
		console_logM("click btn_to_basket ");
		$("#modal_new_buy_end").modal('hide');
		document.location.href = "/personal/order/make/";
		e.preventDefault();
		return false;
	});
	$('#btn_close_win').click(function(e) {
		console_logM("click btn_close_win ");
		$("#modal_new_buy_end").modal('hide');
		e.preventDefault();
		return false;
	});
}

// ===========================================================================================================================
Cl_man_partner.prototype.btns_wr_popul_prod_del_init = function() {
	console_logM("Cl_man_partner btns_wr_popul_prod_del_init st");

	$('.wr_order_popul_prods')
	// .find(".popul_prod,.popul_prod-s")
	.find(".wr_popul_prod_del").each(
			function(index) {
				var basket_product_id = $(this).parents("tr").find(
						"input.basket_product_id");
				basket_product_id = parseInt($(basket_product_id).val());

				console_logM("btns_wr_popul_prod_del_init  index");
				console_logM(index);
				var IDcur = basket_product_id;
				console_logM("btns_wr_popul_prod_del_init  IDcur  00");
				console_logM(IDcur);

				$(this).click(function(e) {
					if (uri.hasQuery("basket_product_id") === true) {
						uri.setSearch("basket_product_id", IDcur);
					} else {
						uri.addSearch("basket_product_id", IDcur);
					}
					document.location.href = uri.href();
					e.preventDefault();
					return false;
				});
			});
	console_logM("Cl_man_partner btns_wr_popul_prod_del_init eeeeeeeeee");

}

// ===========================================================================================================================
// TSENOVOY_SEGMENT
var Cl_manTSENOVOY_SEGMENT = function() {
	this.namId_line_var = "line_var";
	this.uriCl = uri.clone();

	this.num_prod_economical = 0;
	this.num_prod_mid_grade = 0;
	this.num_prod_high_end = 0;

	// prod_all

	console_logM("Cl_manTSENOVOY_SEGMENT isPageCatWheels ");
	console_logM(isPageCatWheels);

	if (!isPageCatWheels) {
		this.SENOVOY_SEGMENT_code_filter = "arrFilter_433";
	} else {
		this.SENOVOY_SEGMENT_code_filter = "arrFilter_459";
	}
	console_logM("Cl_manTSENOVOY_SEGMENT this.SENOVOY_SEGMENT_code_filter ");
	console_logM(this.SENOVOY_SEGMENT_code_filter);

	this.prod_all = "0";
	if (!is_http_loc) {
		this.prod_economical = "2162698314";
		this.prod_mid_grade = "2569805817";
		this.prod_high_end = "2825902025";

	} else {
		this.prod_economical = "2132268982";
		this.prod_mid_grade = "1725161479";
		this.prod_high_end = "1469065271";
	}

	this.prod_allCss = "prod_all";
	this.prod_economicalCss = "prod_economical";
	this.prod_mid_gradeCss = "prod_mid_grade";
	this.prod_high_endCss = "prod_high_end";

	this.num_prods = {

	};

	this.TSENOVOY_SEGMENT_init();
}

// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_init_link = function(
		vTSENOVOY_SEGMENT, e) {
	var uriAx = this.uriCl.clone();
	if (uriAx.hasQuery(this.SENOVOY_SEGMENT_code_filter) === true) {
		uriAx.setSearch(this.SENOVOY_SEGMENT_code_filter, vTSENOVOY_SEGMENT);
	} else {
		uriAx.addSearch(this.SENOVOY_SEGMENT_code_filter, vTSENOVOY_SEGMENT);
	}
	if (!uriAx.hasQuery("set_filter")) {
		uriAx.setSearch("set_filter",
				"%CF%EE%E4%EE%E1%F0%E0%F2%FC+%F8%E8%ED%FB");
	}

	document.location.href = uriAx.href();

	e.preventDefault();
	return false;
}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_init_uriCl = function() {
	console_logM("TSENOVOY_SEGMENT_init_uriCl st");

	this.uriCl.removeSearch(this.SENOVOY_SEGMENT_code_filter);
	this.uriCl.removeSearch(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_all);
	this.uriCl.removeSearch(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_economical);
	this.uriCl.removeSearch(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_mid_grade);
	this.uriCl.removeSearch(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_high_end);
	var result_uriCl_vars = this.uriCl.search(true);
	console_logM("TSENOVOY_SEGMENT_init_uriCl result_uriCl_vars ");
	console_logM(result_uriCl_vars);

}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_get_num_prods_from_link = function(
		TSENOVOY_SEGMENT_type) {
	var th = this;
	console_logM("TSENOVOY_SEGMENT_get_num_prods_from_link st");
	var num_prodsT = $('.num_prod.num_' + TSENOVOY_SEGMENT_type).html();
	console_logM("111111111 TSENOVOY_SEGMENT_get_num_prods_from_link num_prodsT");
	console_logM(num_prodsT);
	num_prodsT = num_prodsT.replace("(", "");
	num_prodsT = num_prodsT.replace(")", "");
	num_prodsT = parseInt(num_prodsT);
	console_logM("222222222 TSENOVOY_SEGMENT_get_num_prods_from_link num_prodsT");
	console_logM(num_prodsT);
	return num_prodsT;
}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_init_all_links = function() {
	var th = this;
	console_logM("TSENOVOY_SEGMENT_init_all_links st");

	$('.num_prod').each(function(index) {
		$(this).hide();
	});

	$(".prod_all").click(function(e) {
		console_logM("click prod_all");
		th.TSENOVOY_SEGMENT_init_link(0, e);
	});
	$(".prod_economical")
			.click(
					function(e) {
						console_logM("click prod_economical");
						if (th
								.TSENOVOY_SEGMENT_get_num_prods_from_link(th.prod_economicalCss) == 0) {
							e.preventDefault();
							return false;
						} else
							th
									.TSENOVOY_SEGMENT_init_link(
											th.prod_economical, e);
					});
	$(".prod_mid_grade")
			.click(
					function(e) {
						console_logM("click prod_mid_grade");
						if (th
								.TSENOVOY_SEGMENT_get_num_prods_from_link(th.prod_mid_gradeCss) == 0) {
							e.preventDefault();
							return false;
						} else
							th.TSENOVOY_SEGMENT_init_link(th.prod_mid_grade, e);
					});
	$(".prod_high_end")
			.click(
					function(e) {
						console_logM("click prod_high_end");
						if (th
								.TSENOVOY_SEGMENT_get_num_prods_from_link(th.prod_high_endCss) == 0) {
							e.preventDefault();
							return false;
						} else
							th.TSENOVOY_SEGMENT_init_link(th.prod_high_end, e);
					});

}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_init_link_active = function() {
	var activeL = this.prod_allCss;
	console_logM("TSENOVOY_SEGMENT_init_link_active st");
	var result_uri_varsL = uri.search(true);
	console_logM("TSENOVOY_SEGMENT_init_link_active result_uri_varsL ");
	console_logM(result_uri_varsL);
	if (uri.hasQuery(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_economical) === true
			|| uri.hasQuery(this.SENOVOY_SEGMENT_code_filter,
					this.prod_economical)) {
		activeL = this.prod_economicalCss;
	}
	if (uri.hasQuery(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_mid_grade) === true
			|| uri.hasQuery(this.SENOVOY_SEGMENT_code_filter,
					this.prod_mid_grade)) {
		activeL = this.prod_mid_gradeCss;
	}
	if (uri.hasQuery(this.SENOVOY_SEGMENT_code_filter + "_"
			+ this.prod_high_end) === true
			|| uri.hasQuery(this.SENOVOY_SEGMENT_code_filter,
					this.prod_high_end)) {
		activeL = this.prod_high_endCss;
	}

	$('.' + activeL).addClass("active");

}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_init = function() {
	var th = this;
	console_logM("TSENOVOY_SEGMENT_init st");

	this.TSENOVOY_SEGMENT_init_uriCl();
	this.TSENOVOY_SEGMENT_init_link_active();
	console_logM("TSENOVOY_SEGMENT_init this.SENOVOY_SEGMENT_code_filter ");
	console_logM(this.SENOVOY_SEGMENT_code_filter);

	this.TSENOVOY_SEGMENT_get_num_prods();
	this.TSENOVOY_SEGMENT_init_all_links();
}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_get_num_prods = function() {
	var th = this;
	console_logM("TSENOVOY_SEGMENT_get_num_prods st");
	var uri2 = this.uriCl.clone();
	if (uri2.hasQuery("ajax") === true) {
		uri2.setSearch("ajax", "y");
	} else {
		uri2.addSearch("ajax", "y");
	}

	console_logM("TSENOVOY_SEGMENT_get_num_prods this.num_prods");
	console_logM(this.num_prods);
	console_logM("TSENOVOY_SEGMENT_get_num_prods num_prods['2132268982']");
	console_logM(this.num_prods['2132268982']);
	console_logM("TSENOVOY_SEGMENT_get_num_prods num_prods[this.prod_economicalCss]");
	console_logM(this.num_prods[this.prod_economicalCss]);

	console_logM("TSENOVOY_SEGMENT_get_num_prods num_prods.prod_economical]");
	console_logM(this.num_prods.prod_economical);
	for (key in this.num_prods) {
		// myArray[key] - значение ключа
		console.log(key + " = " + this.num_prods[key]);
	}

}
// ===========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_set_num_prods = function(
		ELEMENT_COUNT, TSENOVOY_SEGMENT_type) {
	var th = this;
	console_logM("TSENOVOY_SEGMENT_set_num_prods st");
	console_logM("TSENOVOY_SEGMENT_set_num_prods ELEMENT_COUNT");
	console_logM(ELEMENT_COUNT);
	$('.num_prod.num_' + TSENOVOY_SEGMENT_type).html("(" + ELEMENT_COUNT + ")");
	$('.num_prod.num_' + TSENOVOY_SEGMENT_type).show();
	man_prod_last_diplay();
}

// ==========================================================================================================================
Cl_manTSENOVOY_SEGMENT.prototype.TSENOVOY_SEGMENT_get_num_prod_by_type = function(
		v_code_filter, TSENOVOY_SEGMENT_type, uri2) {
	console_logM("TSENOVOY_SEGMENT_get_num_prod_by_type st");
	var th = this;
	// var v_code_filter =1725161479 ;
	var urlL = '';
	var uri3 = uri2.clone();
	if (TSENOVOY_SEGMENT_type != this.prod_allCss)
		uri3.setSearch(this.SENOVOY_SEGMENT_code_filter + "_" + v_code_filter,
				'Y');

	urlL = uri3.href();
	console_logM("TSENOVOY_SEGMENT_get_num_prod_by_type TSENOVOY_SEGMENT_type");
	console_logM(TSENOVOY_SEGMENT_type);
	console_logM("TSENOVOY_SEGMENT_get_num_prod_by_type urlL");
	console_logM(urlL);
	console_logM("TSENOVOY_SEGMENT_get_num_prod_by_type this.SENOVOY_SEGMENT_code_filter ");
	console_logM(this.SENOVOY_SEGMENT_code_filter);

	$
			.ajax({
				dataType : 'text',// json script text
				url : urlL

			})
			.done(
					function(text) {
						console_logM("TSENOVOY_SEGMENT_testAns text");
						// console_logM(text);
						// 'ELEMENT_COUNT':'22',
						var strSearch = "ELEMENT_COUNT':'";
						var patt = new RegExp(strSearch);
						var res = patt.exec(text);
						console_logM("TSENOVOY_SEGMENT_testAns res");
						try {

							console_logM(res);
							console_logM(res.index);
							// index: 23117

							res = text.slice(res.index + strSearch.length,
									res.index + strSearch.length + 5);
							console_logM(res);
							var ELEMENT_COUNT = parseInt(res);
							console_logM("0000000  ELEMENT_COUNT");
							console_logM(ELEMENT_COUNT);
							strSearch = "FORM_ACTION";
							patt = new RegExp(strSearch);
							res = patt.exec(text);
							console_logM(res);
							console_logM(res.index);
							text = text.slice(res.index, text.length);
							console_logM("text arrFilter");
							console_logM(text);
							strSearch = "arrFilter";
							patt = new RegExp(strSearch);
							res = patt.exec(text);
							if (res != null) {
								console_logM("arrFilter res");
								console_logM(res);
								// if (typeof res.index !== "undefined"){
								// console_logM(res.index);
								// }

								ELEMENT_COUNT = 0;
							}

							if (isNaN(ELEMENT_COUNT)) {
								ELEMENT_COUNT = 0;
							}

							console_logM("TSENOVOY_SEGMENT_testAns TSENOVOY_SEGMENT_type");
							console_logM(TSENOVOY_SEGMENT_type);
							console_logM("TSENOVOY_SEGMENT_testAns ELEMENT_COUNT");
							console_logM(ELEMENT_COUNT);
							// th.num_prods[TSENOVOY_SEGMENT_type]=ELEMENT_COUNT;
							th.num_prods[v_code_filter] = ELEMENT_COUNT;

							// return ELEMENT_COUNT;
							th.TSENOVOY_SEGMENT_set_num_prods(ELEMENT_COUNT,
									TSENOVOY_SEGMENT_type);
						} catch (err) {
							console_logM("TSENOVOY_SEGMENT_testAns catch!!!!!!!! ");
						}

					}).fail(function() {
				console_logM("TSENOVOY_SEGMENT_testAns error-------------- ");
				// alert(" TSENOVOY_SEGMENT_testAns error");
			}).always(function() {
				console_logM("finished");
			});

}
// ===========================================================================================================================
// ===========================================================================================================================

function man_ajaxSuccess(event, xhr, settings, data) {
	// ajaxSuccessM(settings.url);

	console_logM('man_ajaxSuccess');
	console_logM(settings);
};
// ===========================================================================================================================
// ===========================================================================================================================

function man_ajaxComplete(event, xhr, settings) {
	// console_logM('ajaxComplete xhr' );
	// console_logM(xhr );
	// console_logM('man_ajaxComplete xhr.responseText' );
	// console_logM(xhr.responseText );

	console_logM('man_ajaxComplete settings');
	console_logM(settings);
	console_logM('man_ajaxComplete.data');
	console_logM(settings.data);
	// ms2_action=order%2Fgetcost&ctx=web
	// if (settings != null)
	if (typeof settings !== "undefined") {

		if (typeof settings.data !== "undefined") {

		}
		if (typeof settings.url !== "undefined") {

		}

		console_logM("man_ajaxComplete settings !== undefined");
	}

};

// ===========================================================================================================================
$(document).ready(function() {
	console_logM("document).ready  ");
	// If the DOM is already ready
	if (jQuery.isReady) {
		// Execute the function immediately
		after_jQueryLoadedAdd();
	} // 	

});

// ===========================================================================================================================
// ===========================================================================================================================
var v_top_popup_win = 0;// 07-10-2017
var v_scrollOld = 0;
var v_scrollStart = 0;
var moveLayerFilter = 0;
function fix_no_shiny() {
	if (typeof differ_par_quer !== "undefined") {
		// alert("differ_par_quer=" + differ_par_quer);
		if (differ_par_quer > 0)
			$(".row-prods").html("Таких шин нет.");
	}
}

// ===========================================================================================================================
function onInitializedCallbackListBrends(event) {
	console_logM("onInitializedCallbackTop  ");
	$(".owl-carousel-list-brends .owl-nav").prop('id', 'owl-navFirstTop');
	$cloneT = $(".owl-carousel-list-brends .owl-nav").clone(true);// true
	$($cloneT).prop('id', 'owl-navSecTop');
	$($cloneT).addClass("owl-nav2");
	$(".owl-carousel-list-brends").append($($cloneT));
	$(".owl-carousel-list-brends .owl-nav").addClass("owl-navFirstTop");
	$(".owl-carousel-list-brends #owl-navFirstTop .owl-next").remove();
	$(".owl-carousel-list-brends #owl-navSecTop .owl-prev").remove();
	// var page = event.page.index; // Position of the current page
	// console_logM("onInitializedCallbackTop page=" + page);

	// $("div.wr_container").css('background-color', "#" + arTSVET_FONA[page]);
}// ===========================================================================================================================
function onInitializedCallbackTop(event) {
	console_logM("onInitializedCallbackTop  ");
	$(".owl-carousel-top .owl-nav").prop('id', 'owl-navFirstTop');
	$cloneT = $(".owl-carousel-top .owl-nav").clone(true);// true
	$($cloneT).prop('id', 'owl-navSecTop');
	$($cloneT).addClass("owl-nav2");
	$(".owl-carousel-top").append($($cloneT));
	$(".owl-carousel-top .owl-nav").addClass("owl-navFirstTop");
	$(".owl-carousel-top #owl-navFirstTop .owl-next").remove();
	$(".owl-carousel-top #owl-navSecTop .owl-prev").remove();
	var page = event.page.index; // Position of the current page
	// console_logM("onInitializedCallbackTop page=" + page);

	$("div.wr_container").css('background-color', "#" + arTSVET_FONA[page]);
}
// ===========================================================================================================================
function onTranslatedCallbackTop(event) {
	console_logM("onTranslatedCallbackTop  ");
	var page = event.page.index; // Position of the current page
	console_logM("onTranslatedCallbackTop  page=" + page);
	if (page == -1) {
		page = 0;
	}
	$("div.wr_container").css('background-color', "#" + arTSVET_FONA[page]);
}

// ===========================================================================================================================
function onInitializedCallbackM(event) {
	console_logM("onInitializedCallbackM  ");
	$(".owl-carousel-pub .owl-nav").prop('id', 'owl-navFirst');
	$cloneT = $(".owl-carousel-pub .owl-nav").clone(true);// true
	$($cloneT).prop('id', 'owl-navSec');
	$($cloneT).addClass("owl-nav2");
	$(".owl-carousel-pub").append($($cloneT));
	$(".owl-carousel-pub .owl-nav").addClass("owl-navFirst");
	$(".owl-carousel-pub #owl-navFirst .owl-next").remove();
	$(".owl-carousel-pub #owl-navSec .owl-prev").remove();
}
// ===========================================================================================================================
function onInitializedCallbackProd(event) {
	console_logM("onInitializedCallbackProd  ");
	$(".carousel-arr-out .owl-nav").prop('id', 'owl-navFirst');
	$cloneT = $(".carousel-arr-out .owl-nav").clone(true);// true
	$($cloneT).prop('id', 'owl-navSec');
	$($cloneT).addClass("owl-nav2");
	$(".carousel-arr-out").append($($cloneT));
	$(".carousel-arr-out .owl-nav").addClass("owl-navFirst");
	$(".carousel-arr-out #owl-navFirst .owl-next").remove();
	$(".carousel-arr-out #owl-navSec .owl-prev").remove();

	change_price_quantity_container_main_page_init();
	change_price_quantity_product_page_init_select();
}

function man_owlCarouselTop() {// 28-12-202013:46 22-12-202010:11

	// $('.owl-carousel').owlCarousel();
	//	
	var slider = $(".owl-carousel-top");// 12-09-201920:17
	slider.owlCarousel({
		items : 1, // один слайд
		loop : true, // закольцевать
		nav : false, // навигация
		dots : true,
		// Перепишем текст кнопок
		// используем Font Awesome для добавления стрелок
		// navText : [
		// '<a class="link_carou" ><i class="fa fa-angle-left fa-2x"
		// aria-hidden="true"></i></a>',
		// '<a class="link_carou" ><i class="fa fa-angle-right fa-2x"
		// aria-hidden="true"></i></a>' ],
		navText : [ '', '' ],
		// <i class="glyphicon glyphicon-chevron-right"></i>
		// ////
		autoplay : true, // автопрокрутка // 10-10-201919:57
		autoplayTimeout : 5000, // задержка в мс
		autoplayHoverPause : false, // не останавливать при наведении
		// onTranslated : onTranslatedCallbackTop,
		onChanged : onTranslatedCallbackTop,

		onInitialized : onInitializedCallbackTop,
		// responsiveClass:true,
		responsive : {
			0 : {
				items : 1,
			// center:true
			// nav:true
			},
			680 : {
				items : 1,
			// center:true
			// nav:false
			},
			1080 : {
				items : 1,
			// nav:true,
			// loop:false
			// center:true
			},
			1440 : {
				items : 1,
			// nav:false,1440
			// loop:false
			// center:true
			},
			1800 : {
				items : 1,
			// nav:false,
			// loop:false
			// center:true
			}

		}

	});

}
function man_owlCarouselListBrends() {// 28-12-202013:46 22-12-202010:11
	console_logM("man_owlCarouselListBrends");
	// $('.owl-carousel').owlCarousel();
	//	
	var slider = $(".owl-carousel-list-brends");// 12-09-201920:17
	slider
			.owlCarousel({
				items : 3, // один слайд
				loop : true, // закольцевать
				nav : false, // навигация
				dots : true,
				margin : 13,
				// Перепишем текст кнопок
				// используем Font Awesome для добавления стрелок
				navText : [
						'<a class="link_carou" ><i class="fa fa-angle-left fa-2x"  aria-hidden="true"></i></a>',
						'<a class="link_carou" ><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>' ],
				// navText : [ '', '' ],
				// <i class="glyphicon glyphicon-chevron-right"></i>
				// ////
				// autoplay : true, // автопрокрутка // 10-10-201919:57
				autoplayTimeout : 5000, // задержка в мс
				autoplayHoverPause : false, // не останавливать при наведении
				// onTranslated : onTranslatedCallbackTop,
				// onChanged : onTranslatedCallbackTop,

				onInitialized : onInitializedCallbackListBrends,
				// responsiveClass:true,
				responsive : {
					0 : {
						items : 1,
						// center:true
						// nav:true
						margin : 0
					},
					680 : {
						items : 1,
						// center:true
						// nav:false
						margin : 0
					},
					1080 : {
						items : 3,
						// nav:true,
						// loop:false
						// center:true
						margin : 0
					},
					1440 : {
						items : 3,
					// nav:false,1440
					// loop:false
					// center:true
					},
					1800 : {
						items : 3,
					// nav:false,
					// loop:false

					}

				}

			});

}
function man_owlCarouselPub() {// 22-12-201720:59 28-12-202013:46

	// $('.owl-carousel').owlCarousel();
	console_logM("man_owlCarouselPub");

	var slider = $(".owl-carousel-pub");// 12-09-201920:17
	slider
			.owlCarousel({
				items : 3, // один слайд
				loop : true, // закольцевать
				nav : true, // навигация
				dots : false,
				margin : 13,
				// Перепишем текст кнопок
				// используем Font Awesome для добавления стрелок
				navText : [
						'<a class="link_carou" ><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>',
						'<a class="link_carou" ><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>' ],
				// <i class="glyphicon glyphicon-chevron-right"></i>
				// //
				// autoplay : true, // автопрокрутка // 10-10-201919:57
				autoplayTimeout : 3000, // задержка в мс
				autoplayHoverPause : false, // не останавливать при наведении
				onInitialized : onInitializedCallbackM,
				// responsiveClass:true,
				responsive : {
					0 : {
						items : 1,
					// center:true
					// nav:true
					},
					680 : {
						items : 2,
					// center:true
					// nav:false
					},
					1080 : {
						items : 3,
						// nav:true,
						// loop:false
						// center:true
						margin : 0
					},
					1440 : {
						items : 3,
					// nav:false,1440
					// loop:false
					// center:true
					},
					1800 : {
						items : 3,
					// nav:false,
					// loop:false
					// center:true
					}

				}

			});

}
function man_VIDEO_PROD() {
	$('.smotret_video').click(function(e) {
		console_logM("click btn_comments ");
		$("#modal_smotret_video").modal('show');
		e.preventDefault();
		return false;
	});
	/*
	 * Get iframe src attribute value i.e. YouTube video url and store it in a
	 * variable
	 */
	var url_VIDEO_PROD = $("#src_store_VIDEO_PROD").val();

	/*
	 * Assign empty url value to the iframe src attribute when modal hide, which
	 * stop the video playing
	 */
	$("#modal_smotret_video").on('hide.bs.modal', function() {
		$("#VIDEO_PROD").attr('src', '');
	});

	/*
	 * Assign the initially stored url back to the iframe src attribute when
	 * modal is displayed again
	 */
	$("#modal_smotret_video").on('show.bs.modal', function() {
		$("#VIDEO_PROD").attr('src', url_VIDEO_PROD);
	});
}
function man_owlCarouselProdPage() {
	$(".owl-carousel-prod-similar").html("");// 02-01-202112:00

	$(".wr_a_ax_popul_prod").each(function(index) {
		$(this).appendTo(".owl-carousel-prod-similar");
	});
	var owlContCarouselT = '.owl-carousel-prod-similar';// 22-12-202010:11
	// carousel-arr-out
	// var owlContCarouselT = '.owl-carousel';//22-12-202010:11
	var slider_prod = $(owlContCarouselT);// 22-12-202010:11

	slider_prod
			.owlCarousel({
				items : 3, // один слайд
				// loop : true, // закольцевать
				loop : false,

				rewind : true,
				nav : true, // навигация
				dots : false,
				margin : 13,
				// Перепишем текст кнопок
				// используем Font Awesome для добавления стрелок
				navText : [
						'<a class="link_carou" ><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>',
						'<a class="link_carou" ><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>' ],
				// <i class="glyphicon glyphicon-chevron-right"></i>
				// //
				// autoplay : true, // автопрокрутка // 10-10-201919:57
				// autoplayTimeout : 3000, // задержка в мс
				autoplayHoverPause : false, // не останавливать при наведении
				onInitialized : onInitializedCallbackProd,
				// responsiveClass:true,
				responsive : {
					0 : {
						items : 1,
					// center:true
					// nav:true
					},
					680 : {
						items : 1,
					// center:true
					// nav:false
					},
					880 : {
						items : 1,
					// center:true
					// nav:false
					},
					1080 : {
						items : 1,
					// nav:true,
					// loop:false
					// center:true
					},
					1240 : {
						items : 3,
					// nav:false,1440
					// loop:false
					// center:true
					},
					1440 : {
						items : 3,
					// nav:false,1440
					// loop:false
					// center:true
					},
					1800 : {
						items : 3,
					// nav:false,
					// loop:false
					// center:true
					}

				}

			});
}

function after_jQueryLoadedAdd() {
	// alert("after_jQueryLoadedAdd");
	console_logM("after_jQueryLoadedAdd 071017 ");
	console_logM("jQuery.fn.jquery");
	console_logM(jQuery.fn.jquery);
	fix_no_shiny();// 19-09-201913:17
	if (typeof shinomontazh_coor_x !== "undefined") {
		if (shinomontazh_coor_x == "") {
			// alert("shinomontazh_coor_x empty");
			$(".row_kontakt1.shinomontaj")
					.html(
							" <div class=\"tit_b_office\">  <b>В данном городе ШИНОМОНТАЖ «Азия Тайрс» отсутсвует </b> </div>");
			$(".wr_table_shinomontaj1").html("");
			$(".title-shinomontaj").html("");

		}

	}

	vCl_man_filter_Seo = new Cl_man_filter_Seo();

	$("#modal_filter_mob")
			.scroll(
					function() {

						// // v_scrollOld
						if (v_scrollOld < $(this).scrollTop())
							moveLayerFilter = -1;
						if (v_scrollOld > $(this).scrollTop())
							moveLayerFilter = 1;
						v_scrollOld = $(this).scrollTop();
						v_scrollOld = parseInt(v_scrollOld);
						var topOld = $(".popup-window:visible").css("top");
						// smartFilterDropDown347 .popup-window
						// input type="radio" name="arrFilter_347
						topOld = parseInt(topOld);
						console_logM("modal_filter_mob v_scrollOld="
								+ v_scrollOld);
						console_logM("modal_filter_mob v_top_popup_win="
								+ v_top_popup_win);
						// $("#modal_filter_mob").css('background-color',
						// 'red');

						// $(".popup-window:visible").css('background-color',
						// "#00f");

						$(".popup-window:visible").css(
								"top",
								(v_top_popup_win - v_scrollOld + v_scrollStart)
										+ 'px');
					});
	// $("body").scroll(function() {
	// console_logM("body scroll ");
	// });

	// alert('Hello ' + bowser.name + ' ' + bowser.version);
	uri = new URI(document.location.href);
	result_uri_vars = uri.search(true);
	vCl_man_uri = new Cl_man_uri();
	console_logM("after_jQueryLoadedAdd $().jquery ");
	console_logM($().jquery);
	vCl_man_basketItemgetQuantity = new Cl_man_basketItemgetQuantity();
	// styled-select
	setTimeout('fix_ie_select();', 500);

	vCl_man_orientationchange = new Cl_man_orientationchange();
	set_resol();
	man_resol();
	// man_orientationchange();
	vCl_man_orientationchange.orientationchangeM();

	$(".wr_filter_car_data").hide();
	$("#filters_form_auto .catalog-filter__footer").hide();// d
	setProd_st_quantity();

	vCl_man_partner = new Cl_man_partner();
	vCl_man_partner_reg = new Cl_man_partner_reg();
	vCl_man_subdomains = new Cl_man_subdomains();
	vCl_man_ymaps_subdomains = new Cl_man_ymaps_subdomains();
	//
	vCl_man_location_user = new Cl_man_location_user();
	vCl_man_location_user.init();
	// page-main
	vCl_man_subscription = new Cl_man_subscription();
	if (jQuery("body").has(".page-main").length) {
		isPageMain = true;
		man_owlCarouselTop();//
		man_owlCarouselPub();

		vCl_mainPageSpeed = new Cl_mainPageSpeed();

		change_price_quantity_container_main_page_init();
		change_filter_form();
		man_filterDispOpt();
		man_TabOnMain();
		man_cat_page_filter_car_init();
	}
	// page order
	if (jQuery("body").has(".row_order,#bx-soa-order-form").length) {
		vCl_man_row_order = new Cl_man_row_order();
	}
	// vCl_man_subdomains = new Cl_man_subdomains();

	// cat page

	if (jQuery("body").has(".wr_row_sizes_popu").length) {
		setTimeout(function() {
			console_logM("page-cat init-get_sizes_popu");
			// $('.bx_sitemap').css("display","none");
			vCl_mainPageSpeed = new Cl_mainPageSpeed();
			// Cl_mainPageSpeed.get_sizes_popu();
		}, 500);

	}
	if (jQuery("body").has(".page-cat").length) {

		if (jQuery("body").has(".page-cat_wheels").length)
			isPageCatWheels = true;
		else
			isPageCat = true;

		vCl_man_filter_mob = new Cl_man_filter_mob();
		vCl_man_diski_zero = new Cl_man_diski_zero();
		// $(".page-cat").hide();
		// $(".page-cat").fadeIn(3000, function() {
		$(".wr-cat_ax").fadeOut(500, function() {

			if (!uri.hasQuery("box_type")) {
				$(".page-cat").show();
			} else {
				$(".wr-cat_ax").show();
				// jQuery("body").hide();
			}
			jQuery(".wr-main.page-cat_ax").hide();
			// $(".page-cat").show();
			// Animation complete
			man_prod_last_diplay();
			$('.row-prods').attr('style', 'height: auto !important');
		});
		//		
		if (typeof SECTION_PAGE_TITLE !== "undefined") {
			$(".title-cat-m").html(SECTION_PAGE_TITLE);
		}
		vCl_man_uri = new Cl_man_uri();
		vCl_man_cat_page_btns_view = new Cl_man_cat_page_btns_view();
		vCl_man_cat_page_btns_nav = new Cl_man_cat_page_btns_nav();

		man_select_sort_prods();
		man_cat_page_filter_clear_place_res();
		man_cat_page_filter_car_clear_name_car();
		var ar_segment = uri.segment(); // returns "foo"
		console_logM("  ar_segment");
		console_logM(ar_segment);
		man_url_car_to_params(ar_segment);
		man_cat_page_collapse_panel();
		man_cat_page_filter_car_modal();
		// $(".row-btn").hide();
		man_cat_page_filter_car_init(true);
		man_cat_page_filter_m_init();

		man_sliderPrice();
		man_FilterCombine();
		// man_FilterCombine_set_form_filters_form_auto();
		man_FilterCombine_init_data_auto_list();
		change_price_quantity_container_cat_prods_init();
		vCl_manTSENOVOY_SEGMENT = new Cl_manTSENOVOY_SEGMENT();

		change_filter_DropDowns_width();
	}

	// row_akcii
	if (jQuery("body").has(".page-cat_ax").length
			|| jQuery("body").has(".page-cat_ax").length) {
		change_price_quantity_container_akcii_prods_init();
	}
	// product_page
	if (jQuery("body").has(".row-product_page").length) {
		adapt_viewAdd_product_page();
		adapt_viewProdTab();
		change_price_quantity_product_page_init();
		change_price_quantity_container_main_page_init();
		vCl_man_comments = new Cl_man_comments();
		man_owlCarouselProdPage();
		man_VIDEO_PROD();
		// Recomm
	}
	corr_menu();
	if ((isPageMain && !isHome_diski) || isPageCat) {
		vCl_man_list_brends = new Cl_man_list_brends();
		vCl_man_sizes_popul = new Cl_man_sizes_popul();

	}

}
// ===========================================================================================================================
function console_log(s) {
	// console.log(s);
}
// ===========================================================================================================================
function console_logAx(s) {
	// console.log(s);
}
// ===========================================================================================================================
function console_logM(s) {
	console.log(s);// 
}

// ===========================================================================================================================
function set_resol() {
	console.log("set_resol ");
	widthG = (window.innerWidth > 30000) ? window.innerWidth : screen.width;
	heightG = (window.innerHeight > 30000) ? window.innerHeight : screen.height;
	console.log("widthG=" + widthG + " heightG=" + heightG);
	// alert("widthG=" + widthG + " heightG=" + heightG);//d
	if (widthG < 778)
	// if (widthG < 778 || heightG < 778)
	{
		resol = "mob_pad";//
	}

	console_logM("resol=" + resol);
	var screenwidth = screen.width;
	console.log("screenwidth=" + screenwidth);
	fix_prod_mob();
}
// ===========================================================================================================================
function man_resol() {
	console.log("man_resol ");
	$(window).bind('orientationchange', function() {
		console.log('orientationchange event.orientation');
		console.log(event.orientation);
		set_resol();
		// 12-09-201712:16
		vCl_man_orientationchange.orientationchangeM();

	});

}
// ===========================================================================================================================
function fix_prod_mob() {
	console_logM("fix_prod_mob st ");

	// return true;
	if (widthG > 420)
		return;
	console.log(" fix_prod_mob widthG=" + widthG + " heightG=" + heightG);
	var marginL = 15;
	var marginL_offs = 6;
	var widthN = widthG - 2 * marginL;
	console.log(" fix_prod_mob widthN=" + widthN);
	marginL = marginL + marginL_offs;
	// page-main
	if (jQuery("body").has(".page-main").length)
		marginL = 0;
	// product
	if (jQuery("body").has(".row-product_page").length)
		marginL = 0;
	// row_order
	if (jQuery("body").has(".row_order").length) {
		marginL = -15;
		// widthN=widthN+15;
	}
	if (jQuery("body").has(".wr_akcii").length)
		marginL = 0;
	if ($("body").has(".prod_mob").length) {
		$('.prod_mob').each(
				function(index) {
					console.log(" fix_prod_mob index=" + index);
					// $(this).css('margin-left', '50px');
					var widthL = $(this).css('width');
					console.log(" fix_prod_mob widthL=" + widthL);
					$(this).attr(
							'style',
							'margin-left:' + marginL + 'px !important;width: '
									+ widthN + 'px !important;');

				});
	}
	if ($("html").has(".isSafari").length) {
		// alert('isSafari');
		$('.prod_mob').each(
				function(index) {
					$(this).find(".styled-select").attr('style',
							'text-indent:16px !important;');

				});
	}

}
// ===========================================================================================================================
function fix_ie_select() {
	console_logM("fix_ie_select st");
	if (bowser.msie && bowser.version == 10) {
		// alert('ie 10');
		$("<link/>", {
			rel : "stylesheet",
			type : "text/css",
			href : "/bitrix/templates/eshop_bootstrap_2017/ie.css"
		}).appendTo("head");
	}
	console_logM("end   fix_ie_select   000000000000");

}
// ===========================================================================================================================
function corr_menu() {
	console_logM("corr_menu ");
	// li.dropdown.depth_level1.open
	if ($("body").has("#navbar-collapse_m  li.dropdown").length) {
		$("#navbar-collapse_m  li.dropdown").each(function(index) {
			$(this).hover(function() {
				$(this).addClass("open");
			}, function() {
				$(this).removeClass("open");// d-- //14-10-201920:34

			});
		});
	}

	if (jQuery("html").has(".body_mob ").length) {
		$("#navbar-collapse_m > ul > li.dropdown.depth_level1 a").click(
				function(e) {
					console_logM("click depth_level1");
					e.preventDefault();
					return false;
				});
	}

	if (jQuery("body").has("a.current").length) {
		$("body").find("a.current").parents("li.dropdown").find(
				"a.dropdown-toggle").addClass("current");
	}

	if (isPageMain && !isHome_diski) {
		console_logM("man_cat_page_filter_car_modal st  ");
		console_logM(isPageMain);
		$("#navbar-collapse_m  li.dropdown > a").addClass("current");
		// $("#navbar-collapse_m li.dropdown > a").addClass("current33");
	}

	$(
			"#navbar-collapse_m  li.dropdown > a, ul.nav.navbar-nav.footer li:nth-child(1) > a")
			.click(function(e) {
				console_logM("click 1********");
				if (!jQuery("html").has(".body_mob").length)
					document.location.href = $(this).prop("href");// 16-09-202020:36
				// document.location.href = "/";
				e.preventDefault();
				return false;
				return true;
			});

	var ind_current_item_menu = -1;
	$('ul.navbar-right  li.depth_level1>a').each(
			function(index) {
				console_logM(".navbar-right   a  hhhhhhh index =" + index);
				console_logM($(this).prop("href"));
				if ($(this).hasClass('current')) {
					console_logM(".navbar-right   current********" + index);
					ind_current_item_menu = index;
					$(
							"ul.nav.navbar-nav.footer    li:nth-child("
									+ (index + 1) + ") > a").addClass(
							"current222");
				}
			});
	// $(".nav.navbar-nav.footer ul ").hide();
	$(".nav.navbar-nav.footer ul   li:nth-child(1) > a").hide();
	// $(".nav.navbar-nav.footer ul > li:nth-child("+(index+1)+") > a").hide();
	// $(".nav.navbar-nav.footer a:nth-child(1)").hide();
	$('#menuVertical > ul   li.dropdown > a').each(function(index) {
		$(this).click(function(e) {
			console_logM("click li.dropdown********");
			e.preventDefault();
			return false;

		});
	});

	$(
			".container_menuVertical div.sec1.city-name, .container_menuVertical div.sec1.city-note")
			.click(function(e) {
				console_logM("click  -sec1.city-name");
				$('.menu-burger').trigger('click');
				// $('.container_menuVertical').stop().animate({
				// left : '-400px'
				// }, 900);
				return false;
			});

	$('.menuVertical_toggle').click(function(e) {
		console_logM("click menuVertical_toggle********");
		// alert("click menuVertical_toggle");
		$('.container_menuVertical').stop().animate({
			left : '0'
		}, 400);
		e.preventDefault();
		return false;

	});
	$('.menu-burger').click(function(e) {
		console_logM("click .menu-burger********");
		if (!isVis_menuVertical) {
			isVis_menuVertical = true;
			$(this).addClass("active");
			$('.menuVertical_toggle').trigger('click');
		} else {
			$(this).removeClass("active");
			isVis_menuVertical = false;
			$('.btn_close_menuVertical').trigger('click');
		}

		e.preventDefault();
		return false;

	});

	$('.btn_close_menuVertical').click(function(e) {
		console_logM("click container_btn_close********");
		$('.container_menuVertical').stop().animate({
			left : '-400px'
		}, 900);
		e.preventDefault();
		return false;

	});

}

// filter form2 bx_filter_select_container
// ===========================================================================================================================

function change_filter_form() {
	console_logM("change_filter_form");
	console_logM(jQuery("html").has(".home_diski").length);
	if (jQuery("html").has(".home_diski").length) {
		isHome_diski = true;
		change_filter_formD();
	} else {
		change_filter_formSh();
	}
	change_filter_DropDowns_width();
	$('#home > form[name=form_profile]').show();
	$('.page-main .wr_loader').hide();

}
// ===========================================================================================================================

function man_filterDispOpt() {
	console_logM("man_filterDispOpt");
	// при старте поставить значение наименование
	// При изменении проверить первая опция
	// Если опция 1 то установить наименование
	$('.small_width_new').each(function(index) {
		var nameT = $(this).find(".catalog-filter__name").html();
		$(this).find(".bx_filter_select_text").html(nameT);
	});
	$('#filters_form_auto  .form-group ').each(
			function(index) {
				var nameT = $(this).find(".catalog-filter__name").html();
				// $(this).find(".bx_filter_select_text").html(nameT);
				// $(this).find("select").empty();
				$(this).find("select").prepend(
						$('<option value="-1">' + nameT + '</option>'));
				var valT = $(this).find("select").val();
				console_logM("man_filterDispOpt index " + index + " valT "
						+ valT);
				if (valT == "") {
					var idT = $(this).find("select").prop("id");
					$("#" + idT + "  [value='-1']")
							.attr("selected", "selected");
				}
			});
}

// ===========================================================================================================================

function change_filter_DropDowns_width() {
	console_logM("change_filter_DropDowns_width");

	$('.bx_filter_select_text')
			.each(
					function(index) {
						var inputT = $(this).parent().find('input:first');
						var idT = $(inputT).prop('id');
						console_logM("  bx_filter_select_text idT =" + idT);
						var ar_id_filter = idT.split("_");
						var id_filter = ar_id_filter[2];
						console_logM("  bx_filter_select_text id_filter ="
								+ id_filter);
						var th = this;
						console_logM(" bx_filter_select_text width= "
								+ $(this).css('width'));
						var th_width = $(this).css('width');
						$(this)
								.click(
										function(e) {
											console_logM("click bx_filter_select_text index "
													+ index);
											var th_width = $(this).parent()
													.css('width');
											setTimeout(
													function() {
														console_logM(" bx_filter_select_text width= "
																+ th_width);
														$(
																"#smartFilterDropDown"
																		+ id_filter)
																.css('width',
																		th_width);
														// 07-10-2017
														v_top_popup_win = $(
																"#smartFilterDropDown"
																		+ id_filter)
																.css("top");
														v_top_popup_win = parseInt(v_top_popup_win);
														v_scrollStart = $(
																"#modal_filter_mob")
																.scrollTop();
														v_scrollStart = parseInt(v_scrollStart);
													}, 100);

											// e.preventDefault();
											// return false;

										});
						$(this)
								.parent()
								.click(
										function(e) {
											console_logM("click bx_filter_select_text .parent() index "
													+ index);
											var th_width = $(this).css('width');
											setTimeout(
													function() {
														console_logM(" bx_filter_select_text width= "
																+ th_width);
														$(
																"#smartFilterDropDown"
																		+ id_filter)
																.css('width',
																		th_width);
													}, 100);

											// e.preventDefault();
											// return false;

										});
					});

}
// ===========================================================================================================================
function change_filter_formSh() {
	console_logM("change_filter_formSh");// 20-09-201913:46
	// return false;//222
	// 12-09-201712:16
	// "SHIP", "MODEL" ,
	// var ar_id_filter = [ "SHIRINA", "PROFIL", "DIAMETR", "SEZON", "BREND" ];
	var ar_id_filter = [ "SHIRINA", "BREND", "PROFIL", "SEZON", "DIAMETR" ];
	if (widthG < 778) {
		ar_id_filter = [ "SHIRINA", "PROFIL", "DIAMETR", "SEZON", "BREND" ];
	}

	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane2  .form-group")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane3  .form-group")
			.html("");
	jQuery
			.each(
					ar_id_filter,
					function(i, val) {
						// console.log("<div>" + i + " : <span>" + val+
						// "</span>");

						var filter_name = $("#b" + val).parent().find(
								".catalog-filter__name"); // col-tab-pane3
						//  
						if (i == 0)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group")
									.append($("#b" + val));
						else {
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane"
											+ (i + 1) + "  .form-group")
									.append($("#b" + val));
						}

						var filterV = $("#b" + val).wrap(
								'<div class="small_width_new" id="w' + val
										+ '"></div>');

						$("#w" + val).prepend(filter_name);
					});
	// bx_filter_btn_color_icon all 222
	var ar_filter_name = [];

	$('#filter_form_old .bx_filter_select_container222222222')
			.each(
					function(index) {
						console_logM("change_filter_form index " + index);
						ar_filter_name[index] = $(this).parent().find(
								".catalog-filter__name");
						$(this).prop('id', 'id_select' + index);

						$(
								"#home > form   .catalog-filter__wrapper.bx_filter  .col-tab-pane  .form-group")
								.append($(this));
						// #home > form >
						// div.row.catalog-filter__wrapper.bx_filter >
						// div.col-lg-4.col-tab-pane > div
					});
}
// ===========================================================================================================================
function change_filter_formD() {
	console_logM("change_filter_formD");

	var ar_id_filter = [ "DIAMETR_DISKA", "KREPEZHNYE_OTVERSTIYA_PCD",
			"VYLET_DISKA_OT", "VYLET_DISKA_DO", "STUPITSA_DIA_OT",
			"STUPITSA_DIA_DO", "SHIRINA_OBODA_OT", "SHIRINA_OBODA_DO",
			"PROIZVODITEL_DISKOV" ];

	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group:nth-child(1)")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group:nth-child(2)")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group:nth-child(3)")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group:nth-child(4)")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group:nth-child(5)")
			.html("");
	$(
			"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group:nth-child(6)")
			.html("");

	// dIAMETR_DISKA********************
	var val = "DIAMETR_DISKA";
	var filter_name = $("#b" + val).parents(".small_width_disk").find(
			".catalog-filter__name");
	// console.log("change_filter_formD filter_name" + filter_name);
	$(
			"#home > form .catalog-filterM__wrapper.bx_filter .col-tab-pane .form-group:nth-child(1)")
			.append($("#b" + val));

	var filterV = $("#b" + val).wrap(
			'<div class="small_width_new" id="w' + val + '"></div>');
	$("#w" + val).prepend(filter_name);

	// KREPEZHNYE_OTVERSTIYA_PCD********************
	val = "KREPEZHNYE_OTVERSTIYA_PCD";
	filter_name = $("#b" + val).parents(".small_width_disk").find(
			".catalog-filter__name");
	// console.log("change_filter_formD filter_name" + filter_name);
	$(
			"#home > form .catalog-filterM__wrapper.bx_filter .col-tab-pane .form-group:nth-child(3)")
			.append($("#b" + val));

	filterV = $("#b" + val).wrap(
			'<div class="small_width_new" id="w' + val + '"></div>');
	$("#w" + val).prepend(filter_name);
	// "VYLET_DISKA_OT", "VYLET_DISKA_DO"********************
	val = "VYLET_DISKA_OT";
	filter_name = $("#b" + val).parents(".small_width_disk").find(
			".catalog-filter__name");
	// console.log("change_filter_formD filter_name" + filter_name);
	$(
			"#home > form .catalog-filterM__wrapper.bx_filter .col-tab-pane .form-group:nth-child(4)")
			.append($("#b" + val));

	filterV = $("#b" + val).wrap(
			'<div class="small_width_new" id="w' + val + '"></div>');
	$("#w" + val).prepend(filter_name);

	$("#b" + val).wrap('<div class="w_val_filter"  ></div>');

	$("#b" + val).before('<span  class="note_add"  >от</span>');
	$("#b" + val).after('<span class="note_add" >до</span>');
	var width_selectT = "89px";
	$('.bx_filter_select_container' + "#b" + val).css("width", width_selectT);

	// VYLET_DISKA_DO"+++++++++++++++++
	val2 = "VYLET_DISKA_DO";
	$("#w" + val + " .w_val_filter").append($("#b" + val2));
	$('.bx_filter_select_container' + "#b" + val2).css("width", width_selectT);
	$('.bx_filter_select_container' + "#b" + val2).css("float", "right");
	// SHIRINA_OBODA_OT SHIRINA_OBODA_DO********************
	val = "SHIRINA_OBODA_OT";
	filter_name = $("#b" + val).parents(".small_width_disk").find(
			".catalog-filter__name");
	// console.log("change_filter_formD filter_name" + filter_name);
	$(
			"#home > form .catalog-filterM__wrapper.bx_filter .col-tab-pane .form-group:nth-child(2)")
			.append($("#b" + val));

	filterV = $("#b" + val).wrap(
			'<div class="small_width_new" id="w' + val + '"></div>');
	$("#w" + val).prepend(filter_name);

	$("#b" + val).wrap('<div class="w_val_filter"  ></div>');

	$("#b" + val).before('<span  class="note_add"  >от</span>');
	$("#b" + val).after('<span class="note_add" >до</span>');
	var width_selectT = "89px";
	$('.bx_filter_select_container' + "#b" + val).css("width", width_selectT);

	// SHIRINA_OBODA_DO"+++++++++++++++++
	val2 = "SHIRINA_OBODA_DO";
	$("#w" + val + " .w_val_filter").append($("#b" + val2));
	$('.bx_filter_select_container' + "#b" + val2).css("width", width_selectT);
	$('.bx_filter_select_container' + "#b" + val2).css("float", "right");

	// STUPITSA_DIA_OT STUPITSA_DIA_DO********************
	val = "STUPITSA_DIA_OT";
	filter_name = $("#b" + val).parents(".small_width_disk").find(
			".catalog-filter__name");
	// console.log("change_filter_formD filter_name" + filter_name);
	$(
			"#home > form .catalog-filterM__wrapper.bx_filter .col-tab-pane .form-group:nth-child(5)")
			.append($("#b" + val));

	filterV = $("#b" + val).wrap(
			'<div class="small_width_new" id="w' + val + '"></div>');
	$("#w" + val).prepend(filter_name);

	$("#b" + val).wrap('<div class="w_val_filter"  ></div>');

	$("#b" + val).before('<span  class="note_add"  >от</span>');
	$("#b" + val).after('<span class="note_add" >до</span>');
	var width_selectT = "89px";
	$('.bx_filter_select_container' + "#b" + val).css("width", width_selectT);

	// STUPITSA_DIA_DO"+++++++++++++++++
	val2 = "STUPITSA_DIA_DO";
	$("#w" + val + " .w_val_filter").append($("#b" + val2));
	$('.bx_filter_select_container' + "#b" + val2).css("width", width_selectT);
	$('.bx_filter_select_container' + "#b" + val2).css("float", "right");

	// PROIZVODITEL_DISKOV********************
	val = "PROIZVODITEL_DISKOV";
	filter_name = $("#b" + val).parents(".small_width_disk").find(
			".catalog-filter__name");
	// console.log("change_filter_formD filter_name" + filter_name);
	$(
			"#home > form .catalog-filterM__wrapper.bx_filter .col-tab-pane .form-group:nth-child(6)")
			.append($("#b" + val));

	filterV = $("#b" + val).wrap(
			'<div class="small_width_new" id="w' + val + '"></div>');
	$("#w" + val).prepend(filter_name);

	return;

	jQuery
			.each(
					ar_id_filter,
					function(i, val) {
						// console.log("<div>" + i + " : <span>" + val+
						// "</span>");

						var filter_name = $("#b" + val).parent().find(
								".catalog-filter__name"); // col-tab-pane3

						// SEZON
						if (i == 0)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group")
									.append($("#b" + val));
						// SHIP
						if (i == 1)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane2  .form-group")
									.append($("#b" + val));
						// SHIRINA
						if (i == 2)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane  .form-group")
									.append($("#b" + val));
						// PROFIL
						if (i == 3)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane2  .form-group")
									.append($("#b" + val));
						// dIAMETR
						if (i == 4)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane3  .form-group")
									.append($("#b" + val));
						// BREND
						if (i == 5)
							$(
									"#home > form   .catalog-filterM__wrapper.bx_filter  .col-tab-pane3  .form-group")
									.append($("#b" + val));

						var filterV = $("#b" + val).wrap(
								'<div class="small_width_new" id="w' + val
										+ '"></div>');

						$("#w" + val).prepend(filter_name);
					});

	var ar_filter_name = [];

	$('#filter_form_old .bx_filter_select_container222222222')
			.each(
					function(index) {
						console_logM("change_filter_form index " + index);
						ar_filter_name[index] = $(this).parent().find(
								".catalog-filter__name");
						$(this).prop('id', 'id_select' + index);

						$(
								"#home > form   .catalog-filter__wrapper.bx_filter  .col-tab-pane  .form-group")
								.append($(this));
					});

}
// ===========================================================================================================================
function adapt_viewAdd_product_page() {
	console_logM("adapt_viewAdd_product_page");
	// Р СњР В°Р В»Р С‘РЎвЂЎР С‘Р Вµ Р Р…Р В° РЎРѓР С”Р В»Р В°Р Т‘Р Вµ
	$(".wrap-stores.global-section").hide();

	// var existProd=$( ".catalog-detail-pickup__button--buy" )[1].html();
	var existProd = $("[id^='obbx_']").html();

	console_logM("adapt_viewAdd_product_page existProd");
	console_logM(existProd);
	$("div.col-product_page-1  div.product_exist").html(existProd);
	$("div.col-prod-page-2  div.product_exist").html(existProd);

	// btn-to-cartM
	$('#btn-to-cartM').click(
			function(e) {
				console_logM("click btn-to-cartM");
				var quantityT = $("div.col-prod-page-2 select").val()
				quantityT_G = quantityT;// 10-07-201822:09
				console_logM("quantityT_G");
				console_logM(quantityT_G);
				priceT_G = $("div.col-prod-page-2 .acia").html();
				var ar_priceT = priceT_G.split(":");
				console_logM("  ar_priceT");
				console_logM(ar_priceT);
				priceT_G = parseInt(ar_priceT[1]);
				console_logM("3 priceT_G");
				console_logM(priceT_G);
				// bx_117848907_676_add_basket_link
				var strT = $('.catalog-buy__button.catalog-buy__button--buyM')
						.prop("id");
				strT = strT.replace("_add_basket_link", "");
				var ar_T = strT.split("_");
				product_id = ar_T[ar_T.length - 1];

				can_basket_add(product_id, quantityT_G, cb_product_page_buy)
				console_logM("click btn-to-cartM  end");
				// e.preventDefault();
				// return false;
			});
	// h4 class="catalog-detail-content__heading
	$('h4.catalog-detail-content__heading').remove();

	setTimeout('bxSlider_init();', 3000);
	if (typeof FileBgSezon !== "undefined") {
	} else {
		console
				.log("miss background-image col-product_page-1-----------------------");
	}

}

// ===========================================================================================================================
function can_basket_add(product_id, quantity, cb, v) {
	console_logM("can_basket_add");
	console_logM("can_basket_add product_id");
	console_logM(product_id);
	console_logM("can_basket_add quantity");
	console_logM(quantity);

	$.getJSON('/include/can_basket_add.php', {
		product_id : product_id,
		QUANTITY : quantity
	}, function(data) {
		console_logM("can_basket_add data");
		console_logM(data);
		cb(v);
		if (typeof data.ans !== "undefined" && data.ans == 1) {
			console_logM("can_basket_add data++++++++++++++++++");
			// cb(v);// add to cart // 25-07-2019
			// $('.catalog-buy__button.catalog-buy__button--buyM')[0].click();//product
		} else {
			console_logM("can_basket_add data*------------------");
			// alert("Более нет такого товара на складе.");
			// alert("Такого количества данного товара на складе нет.");
		}
	}).fail(function() {
		console_logM("can_basket_add error-------------- ");
		alert("Покупка невозможна.");
	}).always(function() {
		console_logM("can_basket_add finished");
		is_click_btn_to_cart = 0;
	});
}
// ===========================================================================================================================
function cb_product_page_buy(v) {
	console_logM("cb_product_page_buy");
	$('.catalog-buy__button.catalog-buy__button--buyM')[0].click();// product
}
// ===========================================================================================================================
function man_FilterCombine() {
	console_logM("man_FilterCombine");
}

// ===========================================================================================================================
function man_FilterCombine_set_form_filters_form_auto() {
	console_logM("man_FilterCombine_set_form_filters_form_auto");
	// http://asia-tires.ruloc/ajax/car_list.php?template=front&car=Acura&model=CL&year=2003&modification=3.2%20i%20Type%20S&type_filter=tyres
	var car = "Acura";
	var model = "CL";
	var year = "2003";
	var modification = "3.2%20i%20Type%20S";
	var type_filter = "tyres";

	if (!isPageCatWheels) {
		type_filter = "tyres";
	} else {
		type_filter = "wheels";
	}
	car = carG;
	model = modelG;
	year = yearG;
	modification = modificationG;
	type_filter = type_filterG;
	template_filters_form_auto = template_filters_form_autoG;// front2017

	$.ajax(
			{
				// url:
				// '/ajax/car_list.php?template=front&car='+$('select#CAR').val()+'&model='+$('select#MODEL').val()+'&year='+$('select#YEAR').val()+'&modification='+$('select#MODIFICATION').val()+'&type_filter=tyres'
				url : '/ajax/car_list.php?template='
						+ template_filters_form_auto + '&car=' + car
						+ '&model=' + model + '&year=' + year
						+ '&modification=' + modification + '&type_filter='
						+ type_filter
			}).done(function(text) {
		$('#car_list_wrap').html(text);
		// man_filterDispOpt();
	});
	console
			.log("man_FilterCombine_set_form_filters_form_auto smartFilter.ajaxURL");
	console_logM(smartFilter.ajaxURL);

}

// ===========================================================================================================================
function man_url_car_to_params(ar_segment) {// 19-09-201913:17
	if (ar_segment[0] == "car") {
		url_carG = true;
		template_filters_form_autoG = "front2017";
		carG = ar_segment[1];
		modelG = ar_segment[2];
		yearG = ar_segment[3];
		modificationG = ar_segment[4];
		type_filterG = "tyres";
		uri.addSearch("carG", ar_segment[1]);
		if (!uri.hasQuery("num_auto_list_ans")) {
			uri.addSearch("num_auto_list_ans", 1);
		}
	}
}
// ===========================================================================================================================
function man_FilterCombine_init_data_auto_list() {
	console_logM("man_FilterCombine_init_data_auto_list st");
	var ar_segment = uri.segment(); // returns "foo"
	console_logM("man_FilterCombine_init_data_auto_list ar_segment");
	console_logM(ar_segment);
	// man_url_car_to_params(ar_segment);
	if (!uri.hasQuery("carG") && ar_segment[0] != "car")
		return;
	if (ar_segment[0] == "car") {
		// man_url_car_to_params(ar_segment);
	} else {
		var result = uri.search(true);
		console_logM("man_FilterCombine_init_data_auto_list result");
		console_logM(result);
		if (typeof result.template_filters_form_auto === "undefined") {
			template_filters_form_autoG = result.template_filters_form_autoG;
			carG = result.carG;
			modelG = result.modelG;
			yearG = result.yearG;
			modificationG = result.modificationG;
			type_filterG = result.type_filterG;
		} else {
			template_filters_form_autoG = result.template_filters_form_auto;
			carG = result.car;
			modelG = result.model;
			yearG = result.year;
			modificationG = result.modification;
			type_filterG = result.type_filter;
		}
	}

	man_FilterCombine_set_form_filters_form_auto();

}
// ===========================================================================================================================
function man_filters_form_auto_PageMain() {
	$('#filters_form_auto').on('submit', function(e) {
		e.preventDefault();
		carG = $('select[name=car]').val();
		modelG = $('select[name=model]').val();
		yearG = $('select[name=year]').val();
		modificationG = $('select[name=modification]').val();
		var str_data = "template=JSON2019";
		str_data += "&car=" + carG;
		str_data += "&model=" + modelG;
		str_data += "&year=" + yearG;
		str_data += "&modification=" + modificationG;
		str_data += "&type_filter=tyres";
		$.ajax({
			type : "POST",
			url : "/ajax/car_list.php?",
			// data :
			// 'template=JSON2019&car=Acura&model=CL&year=2003&modification=3.2i%20Type-S%20YA4&type_filter=tyres',
			data : str_data,
			dataType : "text",
			beforeSend : function() {
			},
			success : function(text) {
				console_logM("man_filters_form_auto_PageMain " + text);
				document.location.href = text;// 19-09-201913:17
			}
		});
	});
}
// ===========================================================================================================================
function man_FilterCombine_init_auto_list_ans() {
	console_logM("man_FilterCombine_init_auto_list_ans st");
	$(document)
			.ready(
					function() {
						console_logM("man_FilterCombine_init_auto_list_ans stG");

						if (isPageMain || isHome_diski) {
							console_logM("man_FilterCombine_init_auto_list_ans isPageMain");
							if (!isHome_diski) {
								$('#filters_form_auto').prop("action",
										path_shiny);// 19-09-201913:17
								man_filters_form_auto_PageMain();
							} else {
								$('#filters_form_auto').prop("action",
										path_wheels);
							}

							if ($('select[name=modification]').val() != '') {
								// $('#filters_form_auto').submit();
							}

							return;
						} else {
							$("#filters_form_auto .row-btn").hide();
							man_cat_page_filter_clear_place_res();
							man_cat_page_filter_car_make_name_car();
						}
						template_filters_form_autoG = template_filters_form_autoT;
						carG = $('select[name=car]').val();
						modelG = $('select[name=model]').val();
						yearG = $('select[name=year]').val();
						modificationG = $('select[name=modification]').val();
						type_filterG = type_filterT;
						stringQueryOutForFilter_by_carG = "";
						stringQueryOutForFilter_by_carG += "template_filters_form_autoG="
								+ template_filters_form_autoG + "&";
						stringQueryOutForFilter_by_carG += "carG=" + carG + "&";
						stringQueryOutForFilter_by_carG += "modelG=" + modelG
								+ "&";
						stringQueryOutForFilter_by_carG += "yearG=" + yearG
								+ "&";
						stringQueryOutForFilter_by_carG += "modificationG="
								+ modificationG + "&";
						stringQueryOutForFilter_by_carG += "type_filterG="
								+ type_filterG + "&";
						console_logM("man_FilterCombine_init_auto_list_ans isNewCarG");
						console_logM(isNewCarG);
						num_auto_list_ansCur = -1;
						$('.auto_list_ans')
								.each(
										function(index) {
											console_logM("select index");
											console_logM(index);
											var data_href = $(this)
													.prop("href");
											if ($("#modal-podbor_auto").css(
													'display') !== 'none') {
												if (!isLoadingSh)
													document.location.href = data_href;// 19-09-201913:17
												isLoadingSh = true;
												return;
											}
											var uriT = new URI(data_href);
											// console
											// .log("man_FilterCombine_init_auto_list_ans
											// uri.query();");
											// console_logM(uriT.query());
											data_href = uriT.query();
											if (uriT
													.hasQuery("num_auto_list_ans")
													&& !isNewCarG && !url_carG) {
												return;
											}

											var ar_data_href = data_href
													.split("/");
											if (url_carG) {
												var result = uriT.search(true);
												ar_data_href[0] = result.num_auto_list_ans;
											}
											console
													.log("man_FilterCombine_init_auto_list_ans ar_data_href");
											console_logM(ar_data_href);
											if (ar_data_href[3] === "undefined"
													&& !url_carG)
												return;
											var obAns = "";
											if (!isPageCatWheels) {
												obAns = man_FilterCombine_filter_by_carSh(
														ar_data_href[0],
														ar_data_href[1],
														ar_data_href[2],
														"R" + ar_data_href[3]);
											} else {
												obAns = man_FilterCombine_filter_by_carD(ar_data_href);
											}

											if (uri.hasQuery("comp_no_reg")) {

												$(".page-cat .catalog-filter")
														.hide();// d--
												$(".row-prods")
														.html(
																"Такой комплектации в базе данных не найдено.");

											}
											if (typeof obAns.href === "undefined") {
												return;
											}
											// $(this).prop("href",
											// obAns.href);// d--19-09-201913:17

											if (obAns.isActLink) {
												$(this).addClass("selected");
												num_auto_list_ansCur = ar_data_href[0];
												console
														.log("man_FilterCombine_init_auto_list_ans num_auto_list_ansCur");
												console_logM(num_auto_list_ansCur);
											}

										});
						isNewCarG = false;

						man_cat_page_filter_set_res();
						Cl_man_diski_zero.prototype.init();

					});
}

// ===========================================================================================================================
function man_FilterCombine_filter_by_carSh(num_auto_list_ans, WIDTH, HEIGHT,
		DIAM) {
	console_logM("man_FilterCombine_filter_by_carSh st");
	var idWIDTH = 537;// SHIRINA WIDTH
	var idHEIGHT = 538;// PROFIL HEIGHT
	var idDIAM = 539;// dIAMETR DIAM
	// var idWIDTH = 347;// SHIRINA WIDTH
	// var idHEIGHT = 348;// PROFIL HEIGHT
	// var idDIAM = 349;// dIAMETR DIAM
	var ar_idParams = [ idWIDTH, idHEIGHT, idDIAM ];
	var ar_valParams = [ WIDTH, HEIGHT, DIAM ];

	var stringQueryOut = "";
	stringQueryOut += "?";
	stringQueryOut += "num_auto_list_ans=" + num_auto_list_ans + "&";
	stringQueryOut += stringQueryOutForFilter_by_carG;

	for (var i = 0; i < ar_idParams.length; i++) {
		if (typeof ar_valParams[i] === "undefined")
			continue;
		// var foundin = $('input[name=arrFilter_' + ar_idParams[i] + ']:first')
		// .parent().find('label:contains("' + ar_valParams[i] + '")');
		var foundin = $('input[name=arrFilter_' + ar_idParams[i] + ']:first')
				.parent().find('label:textEquals("' + ar_valParams[i] + '")');
		console_logM("man_FilterCombine_filter_by_carSh foundin");
		console_logM(foundin);
		try {
			if (typeof foundin[0].htmlFor === "undefined")
				continue;
		} catch (err) {
			console_logM("man_FilterCombine_filter_by_carSh catch!!!!!!!! ");
			stringQueryOut += "comp_no_reg=1&";

			continue;
		}

		console_logM("man_FilterCombine_filter_by_carSh foundin.htmlFor");
		console_logM(foundin[0].htmlFor);
		stringQueryOut += "arrFilter_" + ar_idParams[i] + "="
				+ foundin[0].htmlFor.split(ar_idParams[i] + "_")[1];
		stringQueryOut += "&";
	}

	console_logM("man_FilterCombine_filter_by_carSh carG**********");
	console_logM(carG);

	// id arrFilter_P20_MIN arrFilter_P20_MAX
	// stringQueryOut+="arrFilter_P20_MIN="+$('#arrFilter_P20_MIN').val()+"&";
	// stringQueryOut+="arrFilter_P20_MAX="+$('#arrFilter_P20_MAX').val()+"&";
	stringQueryOut += "arrFilter_P20_MIN=&";
	stringQueryOut += "arrFilter_P20_MAX=&";

	// var uri = new URI(document.location.href);
	console_logM("man_FilterCombine_filter_by_carSh uri.pathname()");
	console_logM(uri.pathname());

	var result = uri.search(true);
	console_logM("man_FilterCombine_filter_by_carSh result.set_filter");
	console_logM(result.set_filter);
	// _form set_filter
	var set_filter = $('form[name=_form] #set_filter').val();
	console_logM("man_FilterCombine_filter_by_carSh set_filter");
	console_logM(set_filter);

	stringQueryOut += "set_filter=" + set_filter;

	console_logM("man_FilterCombine_filter_by_carSh isNewCarG");
	console_logM(isNewCarG);
	console_logM("man_FilterCombine_filter_by_carSh stringQueryOut");
	console_logM(stringQueryOut);
	var uriL = new URI(uri.pathname() + stringQueryOut);
	console_logM("man_FilterCombine_filter_by_carSh uriL href");
	console_logM(uriL.href());
	var v_isActLink = false;
	if (uri.hasQuery("num_auto_list_ans") && !isNewCarG || url_carG) {
		if (result.num_auto_list_ans == num_auto_list_ans)
			v_isActLink = true;
	} else {
		if (!isLoading) {
			// jQuery("body").hide();
			$('.wr_loader_text').html(
					$('.wr_loader_text').html()
							+ "<br/>Заводская комплектация определена.")
			document.location.href = uriL.href();// 19-09-201913:17
		}
		isLoading = true;
		return {};
	}
	return {
		href : uriL.href(),
		isActLink : v_isActLink
	};
}
// ===========================================================================================================================
function man_FilterCombine_filter_by_carD(ar_data_href) {
	console_logM("man_FilterCombine_filter_by_carD st");
	// /?<?=$num_auto_list_ans . "/" . $arData ["WIDTH"] . "/" . $arData
	// ["DIAM"] . "/" . $arData ["LZ"] . "/" " +
	// ". $arData ["PCD"] . "/" . $ET . "/" . $DIA . "/" . $name
	// ["1", "6", "15", "5", "100", "38", "57.1", "DEFAULT"]
	// 15" 6.0 PCD 5/100 ET 38 DIA 57.1

	var num_auto_list_ans = ar_data_href[0];
	// return;
	var idDIAMETR_DISKA = 390;
	var idKREPEZHNYE_OTVERSTIYA_PCD = 391;
	var idPROIZVODITEL_DISKOV = 409;
	var idSHIRINA_OBODA_DO = 411;
	var idSHIRINA_OBODA_OT = 410;
	var idSHIRINA_OBODA = 412;
	var idSTUPITSA_DIA = 393;
	var idSTUPITSA_DO = 403;
	var idSTUPITSA_OT = 402;
	var idVYLET_DISKA_V_MM_ET = 392;
	var idVYLET_DO = 401;
	var idVYLET_OT = 400;

	var ar_idParams = [ idSHIRINA_OBODA_OT, idSHIRINA_OBODA_DO,
			idDIAMETR_DISKA, idKREPEZHNYE_OTVERSTIYA_PCD, idVYLET_OT,
			idVYLET_DO, idSTUPITSA_OT, idSTUPITSA_DO, ];
	var ar_valParams = [ ar_data_href[1], ar_data_href[1], ar_data_href[2],
			ar_data_href[3] + "/" + ar_data_href[4], ar_data_href[5],
			ar_data_href[5], ar_data_href[6], ar_data_href[6], ];

	var stringQueryOut = "";
	stringQueryOut += "?";
	stringQueryOut += "num_auto_list_ans=" + num_auto_list_ans + "&";
	stringQueryOut += stringQueryOutForFilter_by_carG;

	for (var i = 0; i < ar_idParams.length; i++) {
		if (typeof ar_valParams[i] === "undefined")
			continue;
		var foundin = $('input[name=arrFilter_' + ar_idParams[i] + ']:first')
				.parent().find('label:contains("' + ar_valParams[i] + '")');
		console_logM("man_FilterCombine_filter_by_carD foundin");
		console_logM(foundin);
		try {
			if (typeof foundin[0].htmlFor === "undefined")
				continue;
		} catch (err) {
			console_logM("man_FilterCombine_filter_by_carD catch!!!!!!!! ");
			stringQueryOut += "comp_no_reg=1&";

			continue;
		}

		console_logM("man_FilterCombine_filter_by_carD foundin.htmlFor");
		console_logM(foundin[0].htmlFor);
		stringQueryOut += "arrFilter_" + ar_idParams[i] + "="
				+ foundin[0].htmlFor.split(ar_idParams[i] + "_")[1];
		stringQueryOut += "&";
	}

	console_logM("man_FilterCombine_filter_by_carD carG**********");
	console_logM(carG);

	// id arrFilter_P20_MIN arrFilter_P20_MAX
	// stringQueryOut+="arrFilter_P20_MIN="+$('#arrFilter_P20_MIN').val()+"&";
	// stringQueryOut+="arrFilter_P20_MAX="+$('#arrFilter_P20_MAX').val()+"&";
	stringQueryOut += "arrFilter_P20_MIN=&";
	stringQueryOut += "arrFilter_P20_MAX=&";

	// var uri = new URI(document.location.href);
	console_logM("man_FilterCombine_filter_by_carD uri.pathname()");
	console_logM(uri.pathname());

	var result = uri.search(true);
	console_logM("man_FilterCombine_filter_by_carD result.set_filter");
	console_logM(result.set_filter);
	// _form set_filter
	var set_filter = $('form[name=_form] #set_filter').val();
	console_logM("man_FilterCombine_filter_by_carD set_filter");
	console_logM(set_filter);

	stringQueryOut += "set_filter=" + set_filter;

	console_logM("man_FilterCombine_filter_by_carD isNewCarG");
	console_logM(isNewCarG);
	console_logM("man_FilterCombine_filter_by_carD stringQueryOut");
	console_logM(stringQueryOut);
	var uriL = new URI(uri.pathname() + stringQueryOut);
	console_logM("man_FilterCombine_filter_by_carD uriL href");
	console_logM(uriL.href());
	var v_isActLink = false;
	if (uri.hasQuery("num_auto_list_ans") && !isNewCarG) {
		if (result.num_auto_list_ans == num_auto_list_ans)
			v_isActLink = true;
	} else {
		if (!isLoading) {
			// jQuery("body").hide();
			$('.wr_loader_text').html(
					$('.wr_loader_text').html()
							+ "<br/>Заводская комплектация определена.")
			document.location.href = uriL.href();
		}

		isLoading = true;
		return {};
	}
	return {
		href : uriL.href(),
		isActLink : v_isActLink
	};

}

// ===========================================================================================================================
function man_cat_page_filter_car_modal() {
	console_logM("man_cat_page_filter_car_modal st  222222222");
	console_logM("man_cat_page_filter_car_modal st  isPageMain");
	console_logM(isPageMain);
	$("#modal-podbor_auto .modal-footer").hide();
	if (!isPageMain) {
		console_logM("man_cat_page_filter_car_modal st  isPageMain");
		console_logM(isPageMain);
		// $("#filters_form_auto .row-btn").hide();
		// $(".row-btn").hide();
	}

	$("#modal-podbor_auto .modal-body").html($("#car_list_wrap"));// d

	$("a.link-btn-car-change")
			.click(
					function(e) {
						// пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ
						// пїЅпїЅпїЅпїЅ пїЅ id="modal-podbor_auto"
						console
								.log("man_cat_page_filter_car_modal a.link-btn-car-change click");
						$("#modal-podbor_auto").modal('show');
						e.preventDefault();
						return false;

					});
}

// ===========================================================================================================================
function man_cat_page_filter_car_make_name_car() {
	console_logM("man_cat_page_filter_car_make_name_car st");
	var name_car1 = $('select[name=car]').val() + " "
			+ $('select[name=model]').val();// +"
	// 1";
	var name_car2 = $('select[name=modification]').val() + " "
			+ $('select[name=year]').val();// +"
	// 2";
	// div.wr-name-auto div.name-auto1 2
	$(".wr-name-auto   div.name-auto1").html(name_car1);
	$(".wr-name-auto   div.name-auto2").html(name_car2);

}

// ===========================================================================================================================
function man_cat_page_filter_car_clear_name_car() {
	console_logM("man_cat_page_filter_car_clear_name_car st");

	$(".wr-name-auto   div.name-auto1").html("");
	$(".wr-name-auto   div.name-auto2").html("");

}

// ===========================================================================================================================
function man_cat_page_filter_set_res() {
	console_logM("man_cat_page_filter_set_res st");

	$('.wr_filter_car_data .filter-b .filter-data-res').each(
			function(index) {
				console_logM("man_cat_page_filter_set_res index " + index);
				if (index == 0) {
					$(".wr-compl-fact   div.wr-compl-fact-links").html(
							$(this).html());
					$(".wr-compl-fact").show();
				}
				if (index == 1) {
					$(".wr-compl-acsept   div.wr-compl-fact-links").html(
							$(this).html());
					$(".wr-compl-acsept").show();
				}
				if (index == 2) {
					$(".wr-compl-tunning   div.wr-compl-fact-links").html(
							$(this).html());
					$(".wr-compl-tunning").show();
				}

			});
	man_cat_page_collapse_panelAct();
	// filter-b filter-data-res
	// wr-compl-fact-links
	// wr-compl-fact
	// wr-compl-acsept
	// wr-compl-tunning
}
// ===========================================================================================================================
function man_cat_page_filter_clear_place_res() {
	console_logM("man_cat_page_filter_clear_place_res st");
	$(".wr-compl-fact   div.wr-compl-fact-links").html("");
	$(".wr-compl-acsept   div.wr-compl-fact-links").html("");
	$(".wr-compl-tunning   div.wr-compl-fact-links").html("");

	$(".wr-compl-fact").hide();
	$(".wr-compl-acsept").hide();
	$(".wr-compl-tunning").hide();

}

// ===========================================================================================================================
function man_cat_page_filter_m_init() {
	console_logM("man_cat_page_filter_m_init st");
	// id="auto_list_ans2" num_auto_list_ansCur
	// del_filter_m
	$("#del_filter_m")
			.click(
					function(e) {
						console_logM("click del_filter_m");
						console_logM("del_filter_m num_auto_list_ansCur");
						console_logM(num_auto_list_ansCur);
						if (num_auto_list_ansCur > 0) {
							// $(".wr-compl
							// a#auto_list_ans"+num_auto_list_ansCur).trigger('click');
							document.location.href = $(
									".wr-compl a#auto_list_ans"
											+ num_auto_list_ansCur)
									.prop("href");
							// $(".wr-compl
							// #auto_list_ans"+num_auto_list_ansCur).hide();
							console_logM("click del_filter_m auto_list_ans/////////");
						} else {
							console_logM("click del_filter_m del_filter_m_org********");
							// $("#del_filter_m_org").trigger('click');
							document.location.href = uri.pathname();
						}
					});
}

// ===========================================================================================================================
function man_cat_page_filter_car_init(isCatpage) {
	console_logM("man_cat_page_filter_car_init st");
	console_logM("man_cat_page_filter_car_init isCatpage");
	console_logM(isCatpage);
	if (typeof isCatpage !== "undefined")
		if (isCatpage || isPageMain) {
			// if (isCatpage && !isPageMain) {
			console_logM("man_cat_page_filter_car_init isCatpage*********");
			// $("#filters_form_auto .row-btn").hide();
			// $(".row-btn").hide();
			// $("#filters_form_auto #set_filter").hide();
			$("#car_list_wrap  .row-btn .col-tab-pane").hide();
			$('#heading-collapse-panel').removeClass("col-lg-3");
			$('#heading-collapse-panel').addClass("col-lg-12");

		}
	// $(".wr_filter_car_no_data").show();
	$(".wr_filter_car_no_data").hide();

	$("a#del_filter_car")
			.click(
					function(e) {
						console
								.log("man_cat_page_filter_car_modal del_filter_car 222");

						$('form[name=filters_form_auto] .styled-select').each(
								function(index) {
									console_logM("change_filter_form index "
											+ index);
									// $(this).hide();
									$(this).val("");
									if (index > 0)
										$(this).empty();
								});
						$('form[name=filters_form_auto] .styled-select:first')
								.trigger('change');
						$(".wr_filter_car_no_data").show();
						e.preventDefault();
						return false;

					});

}
// ===========================================================================================================================
function man_cat_page_collapse_panel() {
	console_logM("man_cat_page_collapse_panel");
	// $('.panel-on').show();
	// $('.panel-off').hide();
	// wr-link-btn-car-change carG
	if (uri.hasQuery("carG") !== true) {
		$('.wr-link-btn-car-change').hide();
		$('.wr-filter-m').hide();
		if (typeof Modernizr != "undefined"
				&& ((Modernizr.mq('(orientation: landscape)') && widthG < 1025) || (!Modernizr
						.mq('(orientation: landscape)') && widthG < 1024))) {
			$('#modal_filter_mob  .col-filter>section.catalog-filter').css(
					"width", "100%");
		}

	}
	$('.panel-off').show();
	$('.panel-on').hide();
	$('#heading-collapse-panel').hide();

	$('#accordion').on('hidden.bs.collapse', function() {
		console_logM("man_cat_page_collapse_panel hidden.bs.collapse");
		$('.panel-on').hide();
		$('.panel-off').show();
		$('#heading-collapse-panel').addClass("collapsed");
	});
	$('#accordion').on('shown.bs.collapse', function() {
		console_logM("man_cat_page_collapse_panel shown.bs.collapse");
		$('.panel-on').show();
		$('.panel-off').hide();

		$('#heading-collapse-panel').removeClass("collapsed");
	});

}
// ===========================================================================================================================
function man_cat_page_collapse_panelAct() {
	console_logM("man_cat_page_collapse_panelAct st");
	$('.panel-on').show();
	$('.panel-off').hide();

	$('#heading-collapse-panel').show();
	$('#heading-collapse-panel').removeClass("collapsed");

}
// ===========================================================================================================================
function man_sliderPrice() {
	console_logM("man_sliderPrice");// 02-12-202014:09
	// $( "#slider" ).slider({
	// range: true,
	// values: [ 17, 67 ]
	// });
	var PriceCurFilter_MIN = parseInt($("#arrFilter_P20_MIN").val());
	var PriceCurFilter_MAX = parseInt($("#arrFilter_P20_MAX").val());
	var PriceFilter_MIN = parseInt($("div.bx_ui_slider_part.p1 > span").html());
	var PriceFilter_MAX = parseInt($("div.bx_ui_slider_part.p5 > span").html());
	console_logM("man_sliderPrice PriceCurFilter_MIN");
	console_logM(PriceCurFilter_MIN);
	console_logM("man_sliderPrice PriceCurFilter_MAX");
	console_logM(PriceCurFilter_MAX);
	console_logM("man_sliderPrice PriceFilter_MIN");
	console_logM(PriceFilter_MIN);
	console_logM("man_sliderPrice PriceFilter_MAX");
	console_logM(PriceFilter_MAX);

	if (isNaN(PriceCurFilter_MIN))
		PriceCurFilter_MIN = PriceFilter_MIN;
	if (isNaN(PriceCurFilter_MAX))
		PriceCurFilter_MAX = PriceFilter_MAX;
	if (isNaN(PriceCurFilter_MIN))
		PriceCurFilter_MIN = 0;
	if (isNaN(PriceCurFilter_MAX))
		PriceCurFilter_MAX = 0;
	vCl_man_FilterSliderPrice = new Cl_man_FilterSliderPrice();
	vCl_man_FilterSliderPrice.init(PriceCurFilter_MIN, PriceCurFilter_MAX, PriceFilter_MIN, PriceFilter_MAX);
//	$("#slider-range").slider({
//		range : true,
//		min : PriceFilter_MIN,
//		max : PriceFilter_MAX,
//		values : [ PriceCurFilter_MIN, PriceCurFilter_MAX ],
//		slide : function(event, ui) {
//			// $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
//			$(".limits-price").html("" + ui.values[0] + " - " + ui.values[1]);
//			// console_logM("man_sliderPrice slide "+ ui.values[0]);
//
//		},
//		stop : function(event, ui) {
//			// arrFilter_P20_MIN
//			// $("#arrFilter_P20_MIN").focus();
//			$("#arrFilter_P20_MIN").val($("#slider-range").slider("values", 0));
//			var e = jQuery.Event("keyup");
//			e.which = 50; // # Some key code value
//			$('#arrFilter_P20_MIN').trigger(e);
//
//			$("#arrFilter_P20_MAX").val($("#slider-range").slider("values", 1));
//			var e = jQuery.Event("keyup");
//			e.which = 50; // # Some key code value
//			$('#arrFilter_P20_MAX').trigger(e);
//			$('.catalog-filter #set_filter').trigger('click');
//		}
//	});
//	$(".limits-price").html(
//			"" + $("#slider-range").slider("values", 0) + " - "
//					+ $("#slider-range").slider("values", 1));

	$('#arrFilter_P20_MIN').keyup(function(e) {
		console_logM('Yes MIN keyup triggered. ' + e.which)
	});

	$('#arrFilter_P20_MAX').keyup(function(e) {
		console_logM('Yes MAX keyup triggered. ' + e.which)
	});

}
// ===========================================================================================================================
function man_select_sort_prods() {
	console_logM("man_select_sort_prods st");
	// div.wr-buttons-search-top-nav select
	var select_sort_prods = "div.wr-buttons-search-top-nav  select";
	$(select_sort_prods).empty();
	$(select_sort_prods).append(
			$('<option value="name::desc">Производ.</option>'));
	$(select_sort_prods).append(
			$('<option value="CATALOG_PRICE_1::asc">По цене</option>'));
	$(select_sort_prods).append(
			$('<option value="CATALOG_PRICE_1::desc">По цене(убыв.)</option>'));
	if (uri.hasQuery("sort") === true) {
		var result = uri.search(true);
		$(
				select_sort_prods + " [value='" + result.sort + "::"
						+ result.method + "']").attr("selected", "selected");
	}
	$(select_sort_prods).change(function(e) {
		console_logM("select_sort_prods change");
		var vOptCur = $(this).val();
		console_logM(vOptCur);
		var ar_vOptCur = vOptCur.split("::");
		vOptCur = ar_vOptCur[0];
		var v_method = ar_vOptCur[1];
		console_logM(uri.href());
		if (uri.hasQuery("sort") === true) {
			uri.setSearch("sort", vOptCur);
		} else {
			uri.addSearch("sort", vOptCur);
		}
		if (uri.hasQuery("method") === true) {
			uri.setSearch("method", v_method);
		} else {
			uri.addSearch("method", v_method);
		}

		console_logM(uri.href());
		document.location.href = uri.href();
	});
}

// ===========================================================================================================================
function man_TabOnMain() {
	console_logM("man_TabOnMain st");
}

// ===========================================================================================================================
function man_prod_last_diplay() {
	console_logM("man_prod_last_diplay");
	// var prod_css = ".popul_prod";
	var heightElem = "350px";
	if (result_uri_vars.view == "full") {
		// prod_css = ".popul_prod-s";
		heightElem = "265px";
	}
	console_logM("man_prod_last_diplay prod_css");
	console_logM(prod_css);
	$(prod_css + ':last').css("height", heightElem);
	// $('.popul_prod:first').css("height", heightElem);
}

// ===========================================================================================================================
function man_to_cart(id_buy_linkCur, id_quantityCur, id_priceCur) {
	console_logM("man_to_cart st");
	console_logM("id_buy_linkCur");
	console_logM(id_buy_linkCur);
	console_logM("css_wr_mark_price_mul");
	console_logM(css_wr_mark_price_mul);
	var quantityT = $("#" + id_quantityCur).val()
	quantityT_G = quantityT;// 10-07-201822:09
	console_logM("id_priceCur");
	console_logM(id_priceCur);
	priceT_G = $("#" + id_priceCur).parents(".popul_prod").find(
			css_wr_mark_price_mul).text();
	var ar_priceT = priceT_G.split(":");
	console_logM("  ar_priceT");
	console_logM(ar_priceT);
	priceT_G = parseInt(ar_priceT[1]);
	if (isNaN(priceT_G)) {
		priceT_G = $("#" + id_priceCur).parents(".popul_prod-s").find(
				css_wr_mark_price_mul).text();
		ar_priceT = priceT_G.split(":");
		console_logM("  ar_priceT");
		console_logM(ar_priceT);
		priceT_G = parseInt(ar_priceT[1]);
	}
	console_logM("3 priceT_G");
	console_logM(priceT_G);
	// var priceRu = $("#" + idCur + "_price_value").val();
	// console_logM(" priceRu");
	// console_logM(priceRu);
	console_logM("quantityT");
	console_logM(quantityT);
	// bx_328740560_94429_price_value

}
// ===========================================================================================================================

function change_price_quantity_container_main_page_init_select(idCur,
		id_priceCur) {
	change_price_quantity_container_cat_prods_init_select(idCur, id_priceCur);
	return;
	// /////////////////
	try {
		console_logM("change_price_quantity_container_main_page_init_select");
		var id_price_value = $(id_priceCur + "_value").prop('id');
		var priceRu = $("#" + id_priceCur + "_value").val();
		console_logM("change_price_quantity_container_main_page_init_select priceRu");
		console_logM(priceRu);
		if (priceRu.length > 0) {
			var priceRuClean = priceRu.replace(" ", "");
			var price = parseInt(priceRuClean);
			console_logM("change_price_quantity_container_main_page_init_select price");
			console_logM(price);
			var priceNew = $("#" + idCur + suf_ax_prod).val() * price;
			priceNew = priceNew + vSign;
			$("#" + idCur).val($("#" + idCur + suf_ax_prod).val());
			console_logM("change_price_quantity_container_main_page_init_select idCur");
			console_logM(idCur);
			console_logM("change_price_quantity_container_main_page_init_select $( idCur+suf_ax_prod).val()");
			console_logM($("#" + idCur + suf_ax_prod).val());
			console_logM("change_price_quantity_container_main_page_init_select $( idCur).val()");
			console_logM($("#" + idCur).val());
			console_logM("change_price_quantity_container_main_page_init_select priceNew");
			console_logM(priceNew);
			$("#" + id_priceCur + suf_ax_prod).html(priceNew);
		}
	} catch (err) {
		console_logM("change_price_quantity_container_main_page_init_select catch!!!!!!!! ");
	}

}

// ===========================================================================================================================
//
function change_price_quantity_container_main_page_init() {
	console_logM("change_price_quantity_container_main_page_init	st");
	// .page-main,
	// $('.container_top_element,
	// .container-popul_prods').filter(':hidden').remove();
	$(
			'.container_top_element, .container-popul_prods, .wr_carousel-product_page')
			.filter(':visible')
			.find('select')
			.each(
					function(index) {
						var idCur = $(this).prop('id');
						console_logM("select idCur");
						console_logM(idCur);
						idCur = idCur.replace(suf_ax_prod, "");
						var id_priceCur = idCur.replace("quantity", "price");
						console_logM("select id_priceCur");
						console_logM(id_priceCur);

						change_price_quantity_container_main_page_init_select(
								idCur, id_priceCur);
						// popul_prod
						$(this)
								.change(
										function(e) {
											console
													.log("price_quantity_container_popul select 111");
											change_price_quantity_container_main_page_init_select(
													idCur, id_priceCur);
										});
					});
	$(
			'.container_top_element, .container-popul_prods , .wr_carousel-product_page')
			.find('.btn-to-cart')
			.each(
					function(index) {
						var idCur = $(this).prop('id');

						var id_quantityCur = idCur.replace("buy_link",
								"quantity");
						var id_buy_linkCur = idCur.replace(suf_ax_prod, "");
						console_logM('container_top_element idCur ');
						console_logM(idCur);
						console_logM('container_top_element id_quantityCur ');
						console_logM(id_quantityCur);
						console_logM('container_top_element id_buy_linkCur ');
						console_logM(id_buy_linkCur);
						var id_priceCur = idCur.replace("buy_link", "price");
						$(this)
								.click(
										function(e) {
											if (is_click_btn_to_cart != 0) {
												is_click_btn_to_cart = 0;
												e.preventDefault();
												return false;
											} else {

											}
											is_click_btn_to_cart = 1;
											man_to_cart(id_buy_linkCur,
													id_quantityCur, id_priceCur);
											var strT = id_buy_linkCur;
											strT = strT
													.replace("_buy_link", "");
											var ar_T = strT.split("_");
											product_id = ar_T[ar_T.length - 1];

											can_basket_add(product_id,
													quantityT_G, cb_top_buy,
													id_buy_linkCur)
											// $("#" +
											// id_buy_linkCur)[0].click();//top
											console_logM("click btn-to-cart********333");// top
											e.preventDefault();
											return false;
										});
						//		
					});
	$(
			'.container_top_element, .container-popul_prods , .wr_carousel-product_page')
			.find(".popul_prod,.popul_prod-s,.prod_mob")
			.each(
					function(index) {

						var hrefL = $(this)
								.find(
										'.bx_catalog_item_container .catalog-element__title')
								.prop("href");
						console_logM("change_price_quantity_container_main_page_init  hrefL  00");
						console_logM(hrefL);

						if (typeof hrefL === "undefined") {
							var idT = $(this).find('select').prop('id');
							console_logM("change_price_quantity_container_main_page_init  idT");
							console_logM(idT);
							idT = idT.replace(suf_ax_prod, "");
							var id_catalog_item_container = idT.replace(
									"_quantity", "");
							console_logM("change_price_quantity_container_main_page_init  id_catalog_item_container");
							console_logM(id_catalog_item_container);
							try {
								hrefL = $(
										'#' + id_catalog_item_container
												+ ' a.bx_catalog_item_images')
										.prop("href");
							} catch (err) {
								console_logM("change_price_quantity_container_main_page_init catch!!!!!!!! ");
							}

						}
						try {
							console_logM("change_price_quantity_container_main_page_init  hrefL");
							console_logM(hrefL);
						} catch (err) {
							console_logM("change_price_quantity_container_main_page_init catch!!!!!!!! ");
						}

						$(this)
								.click(
										function(e) {
											try {
												// 21-12-201719:37

												console
														.log(e.target.parentNode.className);
												var sT = e.target.parentNode.className;
												console.log("sT=");
												console.log(sT);
												expr0 = "p_num";
												expr1 = "button";
												expr2 = "select";
												expr3 = "btn";
												var ans0T = sT.contains(expr0);
												var ans1T = sT.contains(expr1);
												var ans1T = sT.contains(expr1);
												var ans2T = sT.contains(expr2);
												var ans3T = sT.contains(expr3);
												console.log("ans1T=" + ans1T);
												console.log("ans2T=" + ans2T);
												console.log("ans3T=" + ans3T);
												if (ans0T || ans1T || ans2T
														|| ans3T) {
													console
															.log("no link main_page&catalog-detail");
													e.preventDefault();
													return false;
												} else {
													console
															.log("link++++++++1");
												}

											} catch (err) {
												console_logM("click popul_prod catch!!!!!!!! ");
											}
										});
					});

}

// ===========================================================================================================================
function cb_top_buy(v) {
	console_logM("cb_top_buy");
	$("#" + v)[0].click();
}
// ===========================================================================================================================
function cb_cat_buy(v) {
	console_logM("cb_top_buy");
	$("#" + v)[0].click();
}
// ===========================================================================================================================
function cb_cat_buy_n(v) {// 25-07-2019
	console_logM("cb_cat_buy_n st ");
	console_logM("v=" + v);
	console_logM("quantityT_G=" + quantityT_G);
	vCl_man_partner.partner_buy();

}
// ===========================================================================================================================
//
function change_price_quantity_container_cat_prods_init() {
	console_logM("change_price_quantity_container_cat_prods_init	st");
	console_logM($('.row-prods').css("height"));
	// $('.row-prods').prop("height","auto");
	// $('.row-prods').css("height","auto!important");
	// $('.row-prods').attr('style', 'height: auto !important');
	// $('.row-prods').style('height', 'auto', 'important');
	// .importantRule { width: 100px !important; }

	$('.row-prods').addClass('importantRule');

	console_logM($('.row-prods').css("height"));
	$('.row-prods')
			.find('select')
			.each(
					function(index) {
						var idCur = $(this).prop('id');
						console_logM("select idCur");
						console_logM(idCur);

						idCur = idCur.replace(suf_ax_prod, "");
						var id_priceCur = idCur.replace("quantity", "price");

						console_logM("select id_priceCur");
						console_logM(id_priceCur);

						change_price_quantity_container_cat_prods_init_select(
								idCur, id_priceCur);
						// popul_prod
						$(this)
								.change(
										function(e) {
											console
													.log("price_quantity_container_popul select  222");
											change_price_quantity_container_cat_prods_init_select(
													idCur, id_priceCur);
										});
					});

	$('.row-prods').find('.btn-to-cart').each(
			function(index) {
				var idCur = $(this).prop('id');
				var id_quantityCur = idCur.replace("buy_link", "quantity");
				var id_priceCur = idCur.replace("buy_link", "price");
				var id_buy_linkCur = idCur.replace(suf_ax_prod, "");
				$(this).click(
						function(e) {
							// bx_328740560_5780_buy_link
							console_logM("click btn-to-cart********444");
							man_to_cart(id_buy_linkCur, id_quantityCur,
									id_priceCur);
							var strT = id_buy_linkCur;
							// strT = strT.replace(/\d_buy_link/i, "");
							// strT = strT.replace("0_buy_link", "");
							strT = strT.replace(/_buy_link/i, "");
							console_logM("click btn-to-cart********444-strT");
							console_logM(strT);

							var ar_T = strT.split("_");
							console_logM("click btn-to-cart********444-ar_T");
							console_logM(ar_T);
							product_id = ar_T[ar_T.length - 1];

							// can_basket_add(product_id, quantityT_G,
							// cb_cat_buy, id_buy_linkCur)
							var ar_param = [ product_id ];
							can_basket_add(product_id, quantityT_G,
									cb_cat_buy_n, id_buy_linkCur);// 25-07-2019
							// $("#" + id_buy_linkCur)[0].click();

						});
				//		
			});
	man_prod_last_diplay();
	console_logM('.row-prods popul_prod length');
	console_logM($('.row-prods').find(".popul_prod,.popul_prod-s").length);
	$('.row-prods')
			.find(".popul_prod,.popul_prod-s")
			// ,.prod_mob
			.each(
					function(index) {
						if ($("body").has(".prod_mob").length) {
							return true;
						}
						if (index == $('.row-prods').find(prod_css).length - 1)
							$(this).mousemove(function() {
								man_prod_last_diplay();
							});

						var hrefL = $(this)
								.find(
										'.bx_catalog_item_container .catalog-element__title')
								.prop("href");
						console_logM("change_price_quantity_container_cat_prods_init  hrefL  row-prods");
						console_logM(hrefL);

						$(this)
								.click(
										function(e) {
											// 21-12-201719:37
											console
													.log(" cat_prods popul_prod click isPropagationStoppedG cat_prods e.target.parentNode.className");
											console
													.log(e.target.parentNode.className);
											if ($(this).has(".prod_mob").length) {
												return true;
											}
											var sT = e.target.parentNode.className;
											console.log("sT=");
											console.log(sT);
											expr0 = "p_num";
											expr1 = "button";
											expr2 = "select";
											expr3 = "btn";
											var ans0T = sT.contains(expr0);
											var ans1T = sT.contains(expr1);
											var ans2T = sT.contains(expr2);
											var ans3T = sT.contains(expr3);
											console.log("ans1T=" + ans1T);
											console.log("ans2T=" + ans2T);
											console.log("ans3T=" + ans3T);
											if (ans0T || ans1T || ans2T
													|| ans3T) {
												console
														.log("no link cat_prods");
												e.preventDefault();
												return false;
												// return true;
											} else {
												console.log("link++++++++2");
											}

										});
					});

}
// ===========================================================================================================================
//
function change_price_quantity_container_akcii_prods_init() {
	console_logM("change_price_quantity_container_akcii_prods_init	st");
	$('.row_akcii').find('.btn-to-cart').each(function(index) {
		var idCur = $(this).prop('id');
		var id_quantityCur = idCur.replace("buy_link", "quantity");
		var id_buy_linkCur = idCur.replace(suf_ax_prod, "");
		$(this).click(function(e) {
			console_logM(" akcii_prods  id_quantityCur ");
			console_logM($("#" + id_quantityCur).val());
			// var ar_id_buy_linkCur=$("body").find("#" + id_buy_linkCur);
			// console_logM("click btn-to-cart********ar_id_buy_linkCur");
			// console_logM(ar_id_buy_linkCur);
			$("#" + id_buy_linkCur)[0].click();
			console_logM("click btn-to-cart********row_akcii");
			e.preventDefault();
			return false;

		});
		//		
	});
	console_logM($('.row_akcii').find(".popul_prod,.popul_prod-s").length);
	$('.row_akcii,.page-cat_ax')
			.find(".popul_prod,.popul_prod-s,.prod_mob")
			.each(
					function(index) {

						var hrefL = $(this)
								.find(
										'.bx_catalog_item_container .catalog-element__title')
								.prop("href");
						console_logM("change_price_quantity_container_akcii_prods_init  hrefL  00");
						console_logM(hrefL);

						$(this)
								.click(
										function(e) {
											// 21-12-201719:37
											var sT = e.target.parentNode.className;
											console.log("sT=");
											console.log(sT);
											expr0 = "p_num";
											expr1 = "button";
											expr2 = "select";
											expr3 = "btn";
											var ans0T = sT.contains(expr0);
											var ans1T = sT.contains(expr1);
											var ans2T = sT.contains(expr2);
											var ans3T = sT.contains(expr3);
											console.log("ans0T=" + ans0T);
											console.log("ans1T=" + ans1T);
											console.log("ans2T=" + ans2T);
											console.log("ans3T=" + ans3T);
											if (ans0T || ans1T || ans2T
													|| ans3T) {
												console
														.log("no link akcii_prods");
												e.preventDefault();
												return false;
											} else {
												console.log("link++++++++3");
											}

											console
													.log("popul_prod click isPropagationStoppedG akcii_prods");

											// console.log(isPropagationStoppedG);
											if (e.target == this) { // only if
												console
														.log("popul_prod click e.target == this akcii_prods");
												document.location.href = hrefL;
											}
											if (e.isPropagationStopped()) {
												console
														.log('isPropagationStopped');
											} else {
												console
														.log('not-------isPropagationStopped');
											}

											if ($(e.target).hasClass(
													'styled-select')) {
												console
														.log('form-control styled-select!row_akcii');
												isPropagationStoppedG = true;
												// event.stopPropagation();//???
												// ie
											} else if ($(e.target)
													.hasClass(
															'catalog-element_buy_button')) {
												console
														.log(' catalog-element_buy_button!');
												isPropagationStoppedG = true;
												event.stopPropagation();
											} else {
												if (!isPropagationStoppedG) {
													console
															.log('!isPropagationStoppedG **********!');
													document.location.href = hrefL;
												} else {
													console
															.log('isPropagationStoppedG ---------!');
													isPropagationStoppedG = false;
												}

											}

										});
					});

}
// ===========================================================================================================================

function change_price_quantity_container_akcii_prods_init_select(idCur,
		id_priceCur) {
	console_logM("change_price_quantity_container_akcii_prods_init_select");
	// var id_price_value = $(id_priceCur + "_value").prop('id');
	var priceRu = $("#" + id_priceCur + "_value").val();
	console_logM("change_price_quantity_container_akcii_prods_init_select priceRu");
	console_logM(priceRu);
	try {
		if (priceRu.length > 0) {
			var priceRuClean = priceRu.replace(" ", "");
			var price = parseInt(priceRuClean);
			console_logM("change_price_quantity_container_akcii_prods_init_select price");
			console_logM(price);
			var priceNew = $("#" + idCur + suf_ax_prod).val() * price;
			priceNew = priceNew + " " + vSign;
			$("#" + idCur).val($("#" + idCur + suf_ax_prod).val());
			console_logM("change_price_quantity_container_akcii_prods_init_select idCur");
			console_logM(idCur);
			console_logM("change_price_quantity_container_akcii_prods_init_select $( idCur+suf_ax_prod).val()");
			console_logM($("#" + idCur + suf_ax_prod).val());
			console_logM("change_price_quantity_container_akcii_prods_init_select $( idCur).val()");
			console_logM($("#" + idCur).val());
			console_logM("change_price_quantity_container_akcii_prods_init_select priceNew");
			console_logM(priceNew);
			// css_wr_mark_price_mul
			// $("#" + id_priceCur + suf_ax_prod).html(priceNew);
			$("#" + id_priceCur + "_value").parents(".popul_prod").find(
					css_wr_mark_price_mul).html(
					$("#" + idCur + suf_ax_prod).val() + "шт: " + priceNew);
			$("#" + id_priceCur + "_value").parents(".popul_prod-s").find(
					css_wr_mark_price_mul).html(
					$("#" + idCur + suf_ax_prod).val() + "шт: " + priceNew);
		}
	} catch (err) {
		console_logM("change_price_quantity_container_akcii_prods_init_select catch!!!!!!!! ");
	}
}
// ===========================================================================================================================
// ===========================================================================================================================

function change_price_quantity_product_page_init_select() {
	$('.owl-carousel-prod-similar')
			.find('select')
			.each(
					function(index) {
						var idCur = $(this).prop('id');
						console_logM("change_price_quantity_product_page_init_select select idCur");
						console_logM(idCur);

						change_price_quantity_product_page($(this));
						// popul_prod
						$(this)
								.change(
										function(e) {
											console
													.log("price_quantity_container_popul select  222");
											change_price_quantity_product_page($(this));
										});
					});

}
function change_price_quantity_product_page(el) {
	// Количество
	var quantityT = $(el).val();
	// Цена единицы
	var parent_cont = $(el).parents(".popul_prod");
	var price = $(parent_cont).find('.ID_PRICE_value').val();
	var priceNew = quantityT * price;
	priceNew = priceNew + " " + vSign;
	// Где поставят результат
	$(parent_cont).find('.popul_prod_line5-acia').html(
			quantityT + "шт: " + priceNew);
}

// ===========================================================================================================================
// ===========================================================================================================================
function change_price_quantity_container_cat_prods_init_select(idCur,
		id_priceCur) {
	console_logM("change_price_quantity_container_cat_prods_init_select");
	console_logM("change_price_quantity_container_cat_prods_init_select id_priceCur"
			+ id_priceCur);
	console_logM("change_price_quantity_container_cat_prods_init_select css_wr_mark_price_mul"
			+ css_wr_mark_price_mul);
	// var id_price_value = $(id_priceCur + "_value").prop('id');
	var priceRu = $("#" + id_priceCur + "_value").val();

	if ($("body").has(".row-product_page").length) {
		return;// t222
	}

	console_logM("change_price_quantity_container_cat_prods_init_select priceRu");
	console_logM(priceRu);
	try {
		if (priceRu.length > 0) {
			var priceRuClean = priceRu.replace(" ", "");
			var price = parseInt(priceRuClean);
			console_logM("change_price_quantity_container_cat_prods_init_select price");
			console_logM(price);
			var quantityT = $("#" + idCur + suf_ax_prod).val();
			var priceNew = quantityT * price;
			priceNew = priceNew + " " + vSign;
			$("#" + idCur).val(quantityT);
			console_logM("change_price_quantity_container_cat_prods_init_select idCur");
			console_logM(idCur);
			console_logM("change_price_quantity_container_cat_prods_init_select $( idCur+suf_ax_prod).val()");
			console_logM(quantityT);
			console_logM("change_price_quantity_container_cat_prods_init_select $( idCur).val()");
			console_logM($("#" + idCur).val());
			console_logM("change_price_quantity_container_cat_prods_init_select priceNew");
			console_logM(priceNew);
			// mark_acia=======================================================
			// popul_prod-s popul_prod prod_mob
			if ($("#" + id_priceCur + "_value").parents(
					".popul_prod-s,.popul_prod,.prod_mob").has(
					"#" + id_priceCur + "_acia_value").length) {
				console_logM("change_price_quantity_container_cat_prods_init_select mark_acia!!!");
				if (quantityT == 4) {
					var price_acia = $("#" + id_priceCur + "_acia_value").val();
					console_logM("change_price_quantity_container_cat_prods_init_select id_priceCur)");
					console_logM(id_priceCur);
					console_logM("change_price_quantity_container_cat_prods_init_select price_acia)");
					console_logM(price_acia);
					priceNew = quantityT * price_acia;
					priceNew = priceNew + " " + vSign;
					$("#" + id_priceCur + "_value").parents(".popul_prod-s")
							.find(".price_acia").show();
					$("#" + id_priceCur + suf_ax_prod).html(
							price_acia + " " + vSign);
				} else {
					$("#" + id_priceCur + "_value").parents(".popul_prod-s")
							.find(".price_acia").hide();
					$("#" + id_priceCur + suf_ax_prod)
							.html(price + " " + vSign);
				}
			}
			// popul_prod
			if ($("#" + id_priceCur + "_value").parents(".popul_prod").has(
					"#" + id_priceCur + "_acia_value").length) {
				console_logM("change_price_quantity_container_cat_prods_init_select mark_acia!!! popul_prod");
				if (quantityT == 4) {
					$("#" + id_priceCur + suf_ax_prod)
							.addClass("wr_price_acia");
				} else {
					$("#" + id_priceCur + suf_ax_prod).removeClass(
							"wr_price_acia");
				}
			}
			// end
			// mark_acia=======================================================
			// css_wr_mark_price_mul
			// $("#" + id_priceCur + suf_ax_prod).html(priceNew);
			$("#" + id_priceCur + "_value").parents(".popul_prod").find(
					css_wr_mark_price_mul).html(quantityT + "шт: " + priceNew);
			$("#" + id_priceCur + "_value").parents(".popul_prod-s").find(
					css_wr_mark_price_mul).html(quantityT + "шт: " + priceNew);

			var p_priceST = $("#" + id_priceCur + "_value");
			console_logM("change_price_quantity_container_cat_prods_init_select 1 p_priceST");
			console_logM(p_priceST);
			p_priceST = $("#" + id_priceCur + "_value").parents(".prod_mob");
			console_logM("change_price_quantity_container_cat_prods_init_select 2 p_priceST");
			console_logM(p_priceST);
			p_priceST = $("#" + id_priceCur + "_value").parents(".prod_mob")
					.find(".p_price");
			console_logM("change_price_quantity_container_cat_prods_init_select 3 p_priceST");
			console_logM(p_priceST);

			// $("#" + id_priceCur + "_value").parents(".prod_mob").find(
			// ".p_price").html(
			// '<span class="sp1" >' + quantityT + ' шт: </span>'
			// + priceNew);
			$(p_priceST).html(
					'<span class="sp1" >' + quantityT + ' шт: </span>'
							+ priceNew);
		}
	} catch (err) {
		console_logM("change_price_quantity_container_cat_prods_init_select catch!!!!!!!! ");
	}

}

// ===========================================================================================================================
function adapt_viewProdTab() {
	console_logM("adapt_viewProdTab");

	$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
		// console_logM("adapt_viewProdTab newly activated tab");
		// console_logM(e.target);
		var href_newly = $(e.target).prop("href");
	})

}
// ===========================================================================================================================
// product_page
function bxSlider_init() {
	console_logM("bxSlider_init");
	// return;//d !!!--
	// $('.bxslider').bxSlider();
	$('.slider-goods__slider.cl_asiatires').bxSlider(
	// $('.bxslider').bxSlider(
	{
		slideWidth : 390,
		minSlides : 2,
		maxSlides : 2,
		slideMargin : 2
	});
}

// ===========================================================================================================================
// Product Recommend
function RememberProductRecommendation_GetId(idCur) {
	console_logM("RememberProductRecommendation_GetId");
	console_logM("RememberProductRecommendation_GetId idCur");

	var idCurProd = $("#" + idCur).parents("div.popul_prod").prop("id");
	console_logM("RememberProductRecommendation_GetId idCurProd ");
	console_logM(idCurProd);
	return idCurProd;
}
// ===========================================================================================================================
// Product Recommend
function RememberProductRecommendation_init_link() {
	console_logM("RememberProductRecommendation_init_link");
	$('.catalog-detail')
			.find(".popul_prod,.popul_prod-s,.prod_mob")
			.each(
					function(index) {
						var hrefL = $(this).find('.href_detail_page_url').prop(
								"href");
						console_logM("RememberProductRecommendation_init_link  hrefL  catalog-detail");
						console_logM(hrefL);
						$(this)
								.click(
										function(e) {
											console
													.log(e.target.parentNode.className);
											// 21-12-201719:37
											var sT = e.target.parentNode.className;
											console.log("sT=");
											console.log(sT);
											console.log("sT=");
											console.log(sT);
											expr0 = "p_num";
											expr1 = "button";
											expr2 = "select";
											expr3 = "btn";
											var ans0T = sT.contains(expr0);
											var ans1T = sT.contains(expr1);
											var ans2T = sT.contains(expr2);
											var ans3T = sT.contains(expr3);
											console.log("ans1T=" + ans1T);
											console.log("ans2T=" + ans2T);
											console.log("ans3T=" + ans3T);
											if (ans0T || ans1T || ans2T
													|| ans3T) {
												console
														.log("no link Recommend");
												e.preventDefault();
												return false;
											} else {
												console.log("link++++++++4");
											}

											console
													.log("popul_prod click isPropagationStoppedG Recommend");
											// console.log(isPropagationStoppedG);
											if (e.target == this) { // only if
												console
														.log("popul_prod click e.target == this Recommend");
												document.location.href = hrefL;
											}
											if (e.isPropagationStopped()) {
												console
														.log('isPropagationStopped');
											} else {
												console
														.log('not-------isPropagationStopped');
											}

											if ($(e.target).hasClass(
													'styled-select')
													|| $(e.target)
															.hasClass(
																	'styled-select_option')) {
												console
														.log('form-control styled-select catalog-detail!');
												isPropagationStoppedG = true;
												event.stopPropagation();// ???
												// ie
											} else if ($(e.target)
													.hasClass(
															'catalog-element_buy_button')) {
												console
														.log(' catalog-element_buy_button!');
												isPropagationStoppedG = true;
												event.stopPropagation();
											} else {
												if (!isPropagationStoppedG) {
													console
															.log('!isPropagationStoppedG **********!');
													document.location.href = hrefL;
												} else {
													console
															.log('isPropagationStoppedG ---------!');
													isPropagationStoppedG = false;
												}

											}

										});
					});

}
// ===========================================================================================================================
// product_page
function change_price_quantity_product_page_init() {
	console_logM("change_price_quantity_product_page_init");
	// return ;
	// div.row.btn-to-basket select
	// $('.btn-to-basket select').val(4);
	// $('.row-product_page .btn-to-basket select :nth-child(4)').attr(
	// "selected", "selected");//10-10-201816:52
	var QUANTITY_clean_disp_val = $(
			'.row-product_page .btn-to-basket   select ').parent().find(
			'.QUANTITY_clean_disp_val').val();
	if (QUANTITY_clean_disp_val > 4)
		QUANTITY_clean_disp_val = 4;
	console_logM("setProd_st_quantity QUANTITY_clean_disp_val "
			+ QUANTITY_clean_disp_val);
	$(
			".row-product_page .btn-to-basket   select :nth-child("
					+ QUANTITY_clean_disp_val + ")").attr("selected",
			"selected");// 10-10-201816:52 16-10-20187:51

	$('.row-product_page .btn-to-basket   select')
			.change(
					function(e) {
						console_logM("price_quantity select product_page");

						// var priceRu =
						// $(this).parents("div.row").find(".price").html();
						// var priceRuClean = priceRu.replace(" ", "");
						var idCur = $(this).prop('id');
						console_logM("select idCur");
						console_logM(idCur);
						var id_priceCur = idCur.replace("quantity", "price");
						var price = $("#" + id_priceCur + suf_ax_prod).val();// parseInt(priceRuClean);
						var quantityT = $(this).val();
						var priceSign = price * quantityT + vSign;
						console_logM("price_quantity price");
						console_logM(price);
						// mark_acia=======================================================
						if ($(".row-product_page").has(".wr_price_acia").length) {
							console_logM("price_quantity select product_page!!!");
							if (quantityT == 4) {
								var price_acia = $(
										"#" + id_priceCur + "_acia_value")
										.val();
								console_logM("price_quantity select product_page id_priceCur)");
								console_logM(id_priceCur);
								console_logM("price_quantity select product_page price_acia)");
								console_logM(price_acia);
								$(".wr_price_acia").show();
								$(".price").html(price_acia + " " + vSign);
								priceSign = price_acia * quantityT + vSign;
							} else {
								$(".wr_price_acia").hide();
								$(".price").html(price + " " + vSign);
							}
						}
						// end
						// mark_acia=======================================================
						// acia
						$(this).parents("div.row").find(".acia").html(
								quantityT + "шт: " + priceSign);
					});
	$('.row-product_page .btn-to-basket   select').trigger('change');
}
// ===========================================================================================================================
// ProductRecommend
function change_price_quantity_container_popul_prods_init_select(idCur,
		id_priceCur) {
	console_logM("change_price_quantity_container_popul_prods_init_select");

	var id_price_value = $(id_priceCur + "_value").prop('id');
	var priceRu = $("#" + id_priceCur + "_value").val();
	try {
		if (priceRu.length > 0) {
			var priceRuClean = priceRu.replace(" ", "");
			var price = parseInt(priceRuClean);
			console_logM("price_quantity_container_popul price");
			console_logM(price);
			var priceNew = $("#" + idCur).val() * price + vSign;
			console_logM("price_quantity_container_popul priceNew");
			console_logM(priceNew);
			// $("#" + id_priceCur).html(priceNew);
			// popul_prod_line5-acia
			$("#" + id_priceCur).parent().find(".popul_prod_line5-acia").html(
					$("#" + idCur).val() + "шт: " + priceNew);
		}
	} catch (err) {
		console_logM("change_price_quantity_container_popul_prods_init_select catch!!!!!!!! ");
	}

}
// ===========================================================================================================================
// ProductRecommend
function change_price_quantity_container_popul_prods_init() {
	console_logM("change_price_quantity_container_popul_prods_init");
	$('.slider-goods .container-popul_prods')
			.find('select')
			.each(
					function(index) {
						console_logM("select index");
						console_logM(index);
						var idCur = $(this).prop('id');
						console_logM("select idCur");
						console_logM(idCur); // bx_1182278561_577577_price
						// bx_1182278561_577577_quantity

						var id_priceCur = idCur.replace("quantity", "price");
						console_logM("select id_priceCur");
						console_logM(id_priceCur);
						$(this).val(4);

						change_price_quantity_container_popul_prods_init_select(
								idCur, id_priceCur);
						// popul_prod
						$(this)
								.change(
										function(e) {
											console
													.log("price_quantity_container_popul select 333");
											change_price_quantity_container_popul_prods_init_select(
													idCur, id_priceCur);
										});
					});
	RememberProductRecommendation_init_link();
	$('.container-popul_prods').find('.btn-to-cart').each(function(index) {
		console_logM("select index");
		console_logM(index);
		var idCur = $(this).prop('id');
		console_logM("select idCur");
		console_logM(idCur);
		var id_quantityCur = idCur.replace("buy_link", "quantity");
		// console_logM(" id_quantityCur");
		// console_logM(id_quantityCur);

		// popul_prod
		$(this).click(function(e) {
			console_logM("click btn-to-cart");
			quantity_popul_prods = $("#" + id_quantityCur).val();
			console_logM("click btn-to-cart quantity_popul_prods");
			console_logM(quantity_popul_prods);
		});
	});

}

// ===========================================================================================================================
function BigdataProductsGetQuantity() {
	console_logM("BigdataProductsGetQuantity");
	return quantity_popul_prods;
}
// ===========================================================================================================================
function ADD2BASKET_init() {
	console_logM("ADD2BASKET_init");
	// http://asia-tires.ruloc/catalog/legkovye_shiny/215_40r18_triangle_th201_84y/?action=ADD2BASKET&id=903&ajax_basket=Y&quantity=2&prop[0]=0

}

// ===========================================================================================================================
function setProd_st_quantity() {
	console_logM("setProd_st_quantity st");
	if (jQuery("body").has(".form_order_data_user").length) {
		return;
	}

	$('.styled-select').each(function(index) {
		console_logM("setProd_st_quantity  styled-select index=" + index);
		var $this = $(this);
		$this.find('option').each(function(index, option) {
			$(this).addClass("styled-select_option");
		});

	});

	if (!jQuery("body")
			.has(
					'.popul_prod select.styled-select,.popul_prod-s select.styled-select').length) {
		return;
	}
	;
	$('.popul_prod select.styled-select,.popul_prod-s select.styled-select')
			.each(
					function(index) {
						console_logM("setProd_st_quantity index " + index);
						console_logM($(this));
						var QUANTITY_clean_disp_val = $(this).parent().find(
								'.QUANTITY_clean_disp_val').val();
						console_logM("setProd_st_quantity QUANTITY_clean_disp_val "
								+ QUANTITY_clean_disp_val);
						if (QUANTITY_clean_disp_val > 4)
							QUANTITY_clean_disp_val = 4;
						var idCur = $(this).prop('id');
						if (typeof idCur !== "undefined")
							if (idCur != "") {
								var var_ob = "#" + idCur + " :nth-child("
										+ QUANTITY_clean_disp_val + ")";
								try {
									$(var_ob).attr("selected", "selected");// 10-10-201816:52
								} catch (err) {
									console_logM(err);
								}
							}
					});
	console_logM("setProd_st_quantity fin");

}
// ===========================================================================================================================
var Cl_man_FilterSliderPrice = function() {// 02-12-202014:09
	// this.init(vMin , vMax , vMinFilter , vMaxFilter );
}
// ===========================================================================================================================
Cl_man_FilterSliderPrice.prototype.init = function(vMin, vMax, vMinFilter,
		vMaxFilter) {
	console_logM("Cl_man_FilterSliderPrice init st");
	this.el_price_min = null;
	this.el_price_max = null;
	//this.SliderL = $('#range_l');
//	this.SliderL =$('#range_l');
//	this.SliderR = $('#range_r');
	this.SliderL =document.getElementById('range_l');
	this.SliderR = document.getElementById('range_r');
	
	
	if (vMin == 0)
		vMin = 1;
	this.vMin = vMin;// 1;//
	this.vMax = vMax;
	this.vMinFilter = vMinFilter;
	this.vMaxFilter = vMaxFilter;
	this.set_EventListener();
}; // ===========================================================================================================================
Cl_man_FilterSliderPrice.prototype.set_EventListener = function() {
	var th = this;
	// this.SliderL.setAttribute("max", this.vMaxFilter);
	// this.SliderR.setAttribute("max", this.vMaxFilter);
	this.SliderL.min = this.vMinFilter;//1;// this.vMin;
	this.SliderR.min =this.vMinFilter; //1;// this.vMin;//
	this.SliderL.max = this.vMaxFilter;
	this.SliderR.max = this.vMaxFilter;

	this.SliderL.value = this.vMin;
	// this.SliderL.setAttribute("value", 1);
	this.SliderR.value = this.vMax;
	// this.SliderL.addEventListener('change', function() {
	// // this.setAttribute('value',this.value);
	// console.log('SliderL from ${th.SliderL.value} to ${th.SliderR.value} ');
	// slider_change();
	// });
//	$(document).on('input change', '#range_r', function() {
//	    //$('#slider_value').html( $(this).val() );
//		vMin =$(this).val();
//		console.log('vMin range_r '+vMin);
//	});
//	$(document).on('input change', '#range_l', function() {
//	    //$('#slider_value').html( $(this).val() );
//		vMin =$(this).val();
//		console.log('vMin range_l '+vMin);
//	});
	
	
	
	$(this.SliderL)
			.change(
					function(e) {
						console
								.log('SliderL from ${th.SliderL.value} to ${th.SliderR.value} ');
						slider_change();
						vMin =th.SliderL.value;
						console.log('vMin ${vMin} '+vMin);
					});
	$(this.SliderR)
			.change(
					function(e) {
						console
								.log('SliderR from ${th.SliderR.value} to ${th.SliderR.value} ');
						slider_change();
						vMin =th.SliderR.value;
						console.log('vMin ${vMin} '+vMin);
					});

	// th.SliderR.addEventListener('change', () => {
	// console.log(`SliderR from ${th.SliderL.value} to ${th.SliderR.value} `);
	// slider_change();
	// });
	function slider_change() {
		console.log('slider_change');
		// v_man_Filter.get_FilterT(id_checked, check);
//		v_man_Filter.get_FilterT(true, false, false, th.SliderL.value,
//				th.SliderR.value);
		// arrFilter_P20_MIN
		// $("#arrFilter_P20_MIN").focus();
		$("#arrFilter_P20_MIN").val(th.SliderL.value);
		var e = jQuery.Event("keyup");
		e.which = 50; // # Some key code value
		$('#arrFilter_P20_MIN').trigger(e);

		$("#arrFilter_P20_MAX").val(th.SliderR.value);
		var e = jQuery.Event("keyup");
		e.which = 50; // # Some key code value
		$('#arrFilter_P20_MAX').trigger(e);
		$('.catalog-filter #set_filter').trigger('click');
	}

	this.SliderL.addEventListener('input', slider_input_EventListenerL);
	this.SliderR.addEventListener('input', slider_input_EventListenerR);
	this.set_posMarkersSlider();
	function slider_input_EventListenerL() {
		if (+th.SliderL.value > +th.SliderR.value) {
			th.SliderR.value = +th.SliderL.value;
		}
		th.set_posMarkersSlider();
	}
	function slider_input_EventListenerR() {
		if (+th.SliderL.value > +th.SliderR.value) {
			th.SliderL.value = +th.SliderR.value;
		}
		th.set_posMarkersSlider();
	}
};
Cl_man_FilterSliderPrice.prototype.set_posMarkersSlider = function() {
	console.log("set_posMarkersSlider  ");
	$(".limits-price").html("" + this.SliderL.value + " - " + this.SliderR.value);
//	this.el_price_min.value = this.SliderL.value;
//	this.el_price_max.value = this.SliderR.value;
};
//Cl_man_FilterSliderPrice.prototype.set_posMarkersSliderAX = function() {
//	console.log("set_posMarkersSliderAX  ");
//	this.SliderL.value = this.vMin;
//	this.SliderL.setAttribute("value", "0");
//	this.SliderR.value = this.vMax;
//
//	this.el_price_min.value = this.SliderL.value;
//	this.el_price_max.value = this.SliderR.value;
//};

//Cl_man_FilterSliderPrice.prototype.set_stateSlider = function(vMin, vMax) {
//	console.log("set_stateSlider  ");
//	this.set_vMs(vMin, vMax);
//	// this.getSlider();
//};
//Cl_man_FilterSliderPrice.prototype.set_posSlider = function() {
//	console.log("set_posSlider  ");
//	var el_div_testtest = document.getElementById('wr_tippy_price');
//	el_div_test.style.top = "63px";
//	// this.set_posMarkersSlider();
//}

// ===========================================================================================================================
var Cl_mainPageSpeed = function() {
	this.init();
}
// ===========================================================================================================================
Cl_mainPageSpeed.prototype.init = function() {
	console_logM("Cl_mainPageSpeed init st");
	this.get_ajax_blocks();
}
// ===========================================================================================================================
Cl_mainPageSpeed.prototype.get_ajax_blocks = function() {
	console_logM("Cl_mainPageSpeed get_ajax_blocks st");// 11-10-202017:21
	var th = this;
	setTimeout(function() {
		console_logM(" init-get_list_brends");
		th.get_list_brends();
	}, 500);
	if (jQuery("body").has(".wr_row_sizes_popu").length)
		setTimeout(function() {
			console_logM(" init-get_sizes_popu");
			th.get_sizes_popu();
		}, 500);
}
// ===========================================================================================================================
Cl_mainPageSpeed.prototype.get_list_brends = function() {
	console_logM("Cl_mainPageSpeed get_list_brends st");// 11-10-202017:21

	$.ajax({
		type : "POST",
		url : "/ajax/ajax_list_brends.php",
		// data : str_data,
		dataType : "text",
		beforeSend : function() {
		},
		error : function() {
			console_logM('Failed!-*--------------');
		},
		success : function(text) {
			console_logM("get_list_brends " + text);
			$(".row_list_brends").html(text);
			vCl_man_list_brends = new Cl_man_list_brends();
		}
	});

}
// ===========================================================================================================================
Cl_mainPageSpeed.prototype.get_sizes_popu = function() {
	console_logM("Cl_mainPageSpeed get_sizes_popu st");// 11-10-202017:21

	$.ajax({
		type : "POST",
		url : "/ajax/ajax_sizes_popu.php",
		// data : str_data,
		dataType : "text",
		beforeSend : function() {
		},
		error : function() {
			console_logM('Failed!-*--------------');
		},
		success : function(text) {
			console_logM("get_sizes_popu " + text);
			$(".wr_row_sizes_popu").html(text);
			vCl_man_sizes_popul = new Cl_man_sizes_popul();
		}
	});

}
