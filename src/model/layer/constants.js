const layerTypes = {
	"background":{
		"label":"background",
		"icon":"public",
		"colorProperty":"background-color",
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"background-color":"#37474F"
			}
		}
	},
	"circle":{
		"label":"circle",
		"icon":"grain",
		"colorProperty":"circle-color",
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"circle-color":{"color":"light"},
				"circle-radius":3
			}
		}
	},
	"fill":{
		"label":"fill",
		"icon":"stop",
		"colorProperty":"fill-color",
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"fill-color":{"color":"light"}
			}
		}
	},
	"fill-extrusion":{
		"label":"fill-extrusion",
		"icon":"filter_none",
		"colorProperty":"fill-extrusion-color",
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"fill-extrusion-color":{"color":"light"}
			}
		}
	},
	"heatmap":{
		"label":"heatmap",
		"icon":"bubble_chart",
		"colorProperty":"heatmap-color",
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"heatmap-color":{"color":"light"}
			}
		}
	},
	"hillshade":{
		"label":"hillshade",
		"icon":"landscape",
		"colorProperty":["hillshade-shadow-color","hillshade-highlight-color","hillshade-accent-color"],
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"hillshade-shadow-color":{"color":"light"}
			}
		}
	},
	"line":{
		"label":"line",
		"icon":"show_chart",
		"colorProperty":"line-color",
		"default":{
			"layout":{
				"visibility":"visible"
			},
			"paint":{
				"line-color":{"color":"light"}
			}
		}
	},
	"raster":{
		"label":"raster",
		"icon":"image",
		"default":{
			"layout":{
				"visibility":"visible"
			}
		}
	},
	"symbol":{
		"label":"symbol",
		"icon":"text_format",
		"colorProperty":["text-color","icon-color"],
		"default":{
			"layout":{
				"visibility":"visible",
				"text-font":["Open Sans Regular","Arial Unicode MS Regular"]
			},
			"paint":{
				"text-color":{"color":"light"}
			}
		}
	}
}

export default {
	layerTypes
}