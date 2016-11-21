/*
 * jQuery translit v 0.0.1
 *
 * Copyright 2016, Dmitriy Troyan
 */

(function ($) {
    var methods = {
        init: function (options) {
            var o = {
                alias: $(this),
                string: '',
                translitTo: 'cyrToLat',
                dictionaries: {
                    cyrToLat: {
                        'а': 'a',
                        'б': 'b',
                        'в': 'v',
                        'г': 'g',
                        'д': 'd',
                        'е': 'e',
                        'ё': 'jo',
                        'ж': 'zh',
                        'з': 'z',
                        'и': 'i',
                        'й': 'j',
                        'к': 'k',
                        'л': 'l',
                        'м': 'm',
                        'н': 'n',
                        'о': 'o',
                        'п': 'p',
                        'р': 'r',
                        'с': 's',
                        'т': 't',
                        'у': 'u',
                        'ф': 'f',
                        'х': 'h',
                        'ц': 'c',
                        'ч': 'ch',
                        'ш': 'sh',
                        'щ': 'sch',
                        'ъ': '',
                        'ы': 'y',
                        'ь': '',
                        'э': 'e',
                        'ю': 'ju',
                        'я': 'ja',
                        'і': 'i',
                        'ї': 'i',
                        'є': 'e',
                        'А': 'A',
                        'Б': 'B',
                        'В': 'V',
                        'Г': 'G',
                        'Д': 'D',
                        'Е': 'E',
                        'Ё': 'Jo',
                        'Ж': 'Zh',
                        'З': 'Z',
                        'И': 'I',
                        'Й': 'J',
                        'К': 'K',
                        'Л': 'L',
                        'М': 'M',
                        'Н': 'N',
                        'О': 'O',
                        'П': 'P',
                        'Р': 'R',
                        'С': 'S',
                        'Т': 'T',
                        'У': 'U',
                        'Ф': 'F',
                        'Х': 'H',
                        'Ц': 'C',
                        'Ч': 'Ch',
                        'Ш': 'Sh',
                        'Щ': 'Sch',
                        'Ъ': '',
                        'Ы': 'Y',
                        'Ь': '',
                        'Э': 'E',
                        'Ю': 'Ju',
                        'Я': 'Ja',
                        'І': 'I',
                        'Ї': 'I',
                        'Є': 'E'
                    }
                }
            };

            if (options) {
                $.extend(o, options);
            }

            var self = $(this);

            if (!self.length) {
                self = $('<div>').text(o.string);
            }

            return self.each(function () {
                var str = $(this).text(),
                    translitedStr = '';

                for (item in str) {
                    currentTranslit = o.dictionaries[o.translitTo][str[item]];
                    if (currentTranslit !== undefined) {
                        translitedStr += currentTranslit;
                    } else {
                        translitedStr += str[item];
                    }
                }

                $(this).text(translitedStr);
            })
        }
    };

    $.fn.translit = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' not exists in jQuery.translit');
        }
    };
})(jQuery);