chrome.storage.sync.get(['disabled'], function(result) {
	if (!result['disabled']) {
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.type == "changeColor") {
                    $("div, label, p, button, textarea, img, ul, li, ol, tr, th, td, thead, tbody, span, article, section, main, dl, datalist, output, legend").each(function() {
                        $(this).css('color', request.color);
                    });
                } else if (request.type == "changeFont") {
                    var font = new FontFace(request.family, `url(${request.fontURL})`);
                    document.fonts.add(font);
                    if (request.fontStyle === "standard") {
                        if (!$("body").css("font-family").includes(request.family)) {
                            if (!$("body").css("font-family").includes(request.last)) {
                                $("body").css("font-family", request.family + "," + $("body").css("font-family"));
                            } else {
                                $("body").css("font-family", request.family + "," + $("body").css("font-family").replace(/^[^,]+, */, ''));
                            }
                        }
                        $("body *").each(function() {
                            if (!$(this).css('font-family').includes('sans-serif') && !$(this).css('font-family').includes('serif') && !$(this).css('font-family').includes('monospace')) {
                                if (!$(this).css('font-family').includes(request.family)) {
                                    if (!$(this).css('font-family').includes(request.last)) {
                                        $(this).css("font-family",  request.family + "," + $(this).css("font-family"));
                                    } else {
                                        $(this).css("font-family", request.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                                    }
                                }
                            }
                        });
                    } else if (request.fontStyle === "serif") {
                        $("body *").each(function() {
                            if (!$(this).css('font-family').includes('sans-serif') && $(this).css('font-family').includes('serif')) {
                                if (!$(this).css('font-family').includes(request.family)) {
                                    if (!$(this).css('font-family').includes(request.last)) {
                                        $(this).css("font-family",  request.family + "," + $(this).css("font-family"));
                                    } else {
                                        $(this).css("font-family", request.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                                    }
                                }
                            }
                        });
                    } else if (request.fontStyle === "sans-serif") {
                        $("body *").each(function() {
                            if ($(this).css('font-family').includes('sans-serif')) {
                                if (!$(this).css('font-family').includes(request.family)) {
                                    if (!$(this).css('font-family').includes(request.last)) {
                                        $(this).css("font-family",  request.family + "," + $(this).css("font-family"));
                                    } else {
                                        $(this).css("font-family", request.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                                    }
                                }
                            }
                        });
                    } else if (request.fontStyle === "monospace") {
                        $("body *").each(function() {
                            if ($(this).css('font-family').includes('monospace')) {
                                if (!$(this).css('font-family').includes(request.family)) {
                                    if (!$(this).css('font-family').includes(request.last)) {
                                        $(this).css("font-family",  request.family + "," + $(this).css("font-family"));
                                    } else {
                                        $(this).css("font-family", request.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                                    }
                                }
                            }
                        });
                    }
                } else if (request.type == "removeFont") {
                    if (request.fontStyle === "standard") {
                        if ($("body").css("font-family").includes(request.last)) {
                            $("body").css("font-family", $("body").css("font-family").replace(/^[^,]+, */, ''));
                        }
                        $("body *").each(function() {
                            if (!$(this).css('font-family').includes('sans-serif') && !$(this).css('font-family').includes('serif') && !$(this).css('font-family').includes('monospace')) {
                                if ($(this).css('font-family').includes(request.last)) {
                                    $(this).css("font-family", $(this).css("font-family").replace(/^[^,]+, */, ''));
                                }
                            }
                        });
                    } else if (request.fontStyle === "serif") {
                        $("body *").each(function() {
                            if (!$(this).css('font-family').includes('sans-serif') && $(this).css('font-family').includes('serif')) {
                                if ($(this).css('font-family').includes(request.last)) {
                                    $(this).css("font-family", $(this).css("font-family").replace(/^[^,]+, */, ''));
                                }
                            }
                        });
                    } else if (request.fontStyle === "sans-serif") {
                        $("body *").each(function() {
                            if ($(this).css('font-family').includes('sans-serif')) {
                                if ($(this).css('font-family').includes(request.last)) {
                                    $(this).css("font-family", $(this).css("font-family").replace(/^[^,]+, */, ''));
                                }
                            }
                        });
                    } else if (request.fontStyle === "monospace") {
                        $("body *").each(function() {
                            if ($(this).css('font-family').includes('monospace')) {
                                if ($(this).css('font-family').includes(request.last)) {
                                    $(this).css("font-family", $(this).css("font-family").replace(/^[^,]+, */, ''));
                                }
                            }
                        });
                    }
                }
                sendResponse({});
            });
        
        chrome.storage.sync.get(['standard', 'sans', 'serif', 'monospace', 'color'], function(result) {
            if (result['standard']) {
                standardFontData = JSON.parse(result['standard']);
        
                var font = new FontFace(standardFontData.family, `url(${standardFontData.url})`);
                document.fonts.add(font);
        
                if (!$("body").css("font-family").includes(standardFontData.family)) {
                    if (!$("body").css("font-family").includes(standardFontData.last)) {
                        $("body").css("font-family", standardFontData.family + "," + $("body").css("font-family"));
                    } else {
                        $("body").css("font-family", standardFontData.family + "," + $("body").css("font-family").replace(/^[^,]+, */, ''));
                    }
                }
                $("body *").each(function() {
                    if (!$(this).css('font-family').includes('sans-serif') && !$(this).css('font-family').includes('serif') && !$(this).css('font-family').includes('monospace')) {
                        if (!$(this).css('font-family').includes(standardFontData.family)) {
                            if (!$(this).css('font-family').includes(standardFontData.last)) {
                                $(this).css("font-family",  standardFontData.family + "," + $(this).css("font-family"));
                            } else {
                                $(this).css("font-family", standardFontData.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                            }
                        }
                    }
                });
            }
            if (result['sans']) {
                sansFontData = JSON.parse(result['sans']);
        
                var font = new FontFace(sansFontData.family, `url(${sansFontData.url})`);
                document.fonts.add(font);
                $("body *").each(function() {
                    if ($(this).css('font-family').includes('sans-serif')) {
                        if (!$(this).css('font-family').includes(sansFontData.family)) {
                            if (!$(this).css('font-family').includes(sansFontData.last)) {
                                $(this).css("font-family",  sansFontData.family + "," + $(this).css("font-family"));
                            } else {
                                $(this).css("font-family", sansFontData.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                            }
                        }
                    }
                });
            }
            if (result['serif']) {
                serifFontData = JSON.parse(result['serif']);
        
                var font = new FontFace(serifFontData.family, `url(${serifFontData.url})`);
                document.fonts.add(font);
                $("body *").each(function() {
                    if ($(this).css('font-family').includes('serif') && !$(this).css('font-family').includes('sans-serif')) {
                        if (!$(this).css('font-family').includes(serifFontData.family)) {
                            if (!$(this).css('font-family').includes(serifFontData.last)) {
                                $(this).css("font-family",  serifFontData.family + "," + $(this).css("font-family"));
                            } else {
                                $(this).css("font-family", serifFontData.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                            }
                        }
                    }
                });
            }
            if (result['monospace']) {
                monospaceFontData = JSON.parse(result['monospace']);
        
                var font = new FontFace(monospaceFontData.family, `url(${monospaceFontData.url})`);
                document.fonts.add(font);
                $("body *").each(function() {
                    if ($(this).css('font-family').includes('serif') && !$(this).css('font-family').includes('sans-serif')) {
                        if (!$(this).css('font-family').includes(monospaceFontData.family)) {
                            if (!$(this).css('font-family').includes(monospaceFontData.last)) {
                                $(this).css("font-family",  monospaceFontData.family + "," + $(this).css("font-family"));
                            } else {
                                $(this).css("font-family", monospaceFontData.family + "," + $(this).css("font-family").replace(/^[^,]+, */, ''));
                            }
                        }
                    }
                });
            }
        
            if (result.color) {
                $("div, label, p, button, textarea, img, ul, li, ol, tr, th, td, thead, tbody, span, article, section, main, dl, datalist, output, legend").each(function() {
                    $(this).css('color', result.color);
                });
            }
        })
	}
});