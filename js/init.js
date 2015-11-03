$(document).ready(function() {

    var charMap = [
        {
            "hi": "あ", "ro": "a"
        },
        {
            "hi": "い", "ro": "i"
        },
        {
            "hi": "う", "ro": "u"
        },
        {
            "hi": "え", "ro": "e"
        },
        {
            "hi": "お", "ro": "o"
        },
        {
            "hi": "ん", "ro": "n"
        },
        {
            "hi": "は", "ro": "ha"
        },
        {
            "hi": "ひ", "ro": "hi"
        },
        {
            "hi": "ふ", "ro": "fu"
        },
        {
            "hi": "へ", "ro": "he"
        },
        {
            "hi": "ほ", "ro": "ho"
        },
        {
            "hi": "か", "ro": "ka"
        },
        {
            "hi": "き", "ro": "ki"
        },
        {
            "hi": "く", "ro": "ku"
        },
        {
            "hi": "け", "ro": "ke"
        },
        {
            "hi": "こ", "ro": "ko"
        },
        {
            "hi": "ま", "ro": "ma"
        },
        {
            "hi": "み", "ro": "mi"
        },
        {
            "hi": "む", "ro": "mu"
        },
        {
            "hi": "め", "ro": "me"
        },
        {
            "hi": "も", "ro": "mo"
        },
        {
            "hi": "さ", "ro": "sa"
        },
        {
            "hi": "し", "ro": "shi"
        },
        {
            "hi": "す", "ro": "su"
        },
        {
            "hi": "せ", "ro": "se"
        },
        {
            "hi": "そ", "ro": "so"
        },
        {
            "hi": "や", "ro": "ya"
        },
        {
            "hi": "ゆ", "ro": "yu"
        },
        {
            "hi": "た", "ro": "ta"
        },
        {
            "hi": "ち", "ro": "chi"
        },
        {
            "hi": "つ", "ro": "tsu"
        },
        {
            "hi": "て", "ro": "te"
        },
        {
            "hi": "と", "ro": "to"
        },
        {
            "hi": "ら", "ro": "ra"
        },
        {
            "hi": "り", "ro": "ri"
        },
        {
            "hi": "る", "ro": "ru"
        },
        {
            "hi": "れ", "ro": "re"
        },
        {
            "hi": "ろ", "ro": "ro"
        },
        {
            "hi": "な", "ro": "na"
        },
        {
            "hi": "に", "ro": "ni"
        },
        {
            "hi": "ぬ", "ro": "nu"
        },
        {
            "hi": "ね", "ro": "ne"
        },
        {
            "hi": "の", "ro": "no"
        },
        {
            "hi": "わ", "ro": "wa"
        },
        {
            "hi": "ゐ", "ro": "wi"
        },
        {
            "hi": "ゑ", "ro": "we"
        },
        {
            "hi": "を", "ro": "wo"
        },
        {
            "hi": "が", "ro": "ga"
        },
        {
            "hi": "ぎ", "ro": "gi"
        },
        {
            "hi": "ぐ", "ro": "gu"
        },
        {
            "hi": "げ", "ro": "ge"
        },
        {
            "hi": "ご", "ro": "go"
        },
        {
            "hi": "ざ", "ro": "za"
        },
        {
            "hi": "じ", "ro": "ji"
        },
        {
            "hi": "ず", "ro": "zu"
        },
        {
            "hi": "ぜ", "ro": "ze"
        },
        {
            "hi": "ぞ", "ro": "zo"
        },
        {
            "hi": "だ", "ro": "da"
        },
        {
            "hi": "ぢ", "ro": "ji"
        },
        {
            "hi": "づ", "ro": "zu"
        },
        {
            "hi": "で", "ro": "de"
        },
        {
            "hi": "ど", "ro": "do"
        },
        {
            "hi": "ば", "ro": "ba"
        },
        {
            "hi": "び", "ro": "bi"
        },
        {
            "hi": "ぶ", "ro": "bu"
        },
        {
            "hi": "べ", "ro": "be"
        },
        {
            "hi": "ぼ", "ro": "bo"
        },
        {
            "hi": "ぱ", "ro": "pa"
        },
        {
            "hi": "ぴ", "ro": "pi"
        },
        {
            "hi": "ぷ", "ro": "pu"
        },
        {
            "hi": "ぺ", "ro": "pe"
        },
        {
            "hi": "ぽ", "ro": "po"
        },
        {
            "hi": "きゃ", "ro": "kya"
        },
        {
            "hi": "きゅ", "ro": "kyu"
        },
        {
            "hi": "きょ", "ro": "kyo"
        },
        {
            "hi": "しゃ", "ro": "sha"
        },
        {
            "hi": "しゅ", "ro": "shu"
        },
        {
            "hi": "しょ", "ro": "sho"
        },
        {
            "hi": "ちゃ", "ro": "cha"
        },
        {
            "hi": "ちゅ", "ro": "chu"
        },
        {
            "hi": "ちょ", "ro": "cho"
        },
        {
            "hi": "ひゃ", "ro": "hya"
        },
        {
            "hi": "ひゅ", "ro": "hyu"
        },
        {
            "hi": "ひょ", "ro": "hyo"
        },
        {
            "hi": "ぴゃ", "ro": "pya"
        },
        {
            "hi": "ぴゅ", "ro": "pyu"
        },
        {
            "hi": "ぴょ", "ro": "pyo"
        },
        {
            "hi": "ぎゃ", "ro": "gya"
        },
        {
            "hi": "ぎゅ", "ro": "gya"
        },
        {
            "hi": "ぎょ", "ro": "gyo"
        },
        {
            "hi": "りゃ", "ro": "rya"
        },
        {
            "hi": "じゃ", "ro": "ja"
        },
        {
            "hi": "じゅ", "ro": "ju"
        },
        {
            "hi": "じょ", "ro": "jo"
        },
        {
            "hi": "りゅ", "ro": "ryu"
        },
        {
            "hi": "にゃ", "ro": "nya"
        },
        {
            "hi": "にゅ", "ro": "nyu"
        },
        {
            "hi": "にょ", "ro": "nyo"
        },
        {
            "hi": "りょ", "ro": "ryu"
        },
        {
            "hi": "びゃ", "ro": "bya"
        },
        {
            "hi": "びゅ", "ro": "byu"
        },
        {
            "hi": "びょ", "ro": "byo"
        },
        {
            "hi": "ぢゃ", "ro": "ja"
        },
        {
            "hi": "みゃ", "ro": "mya"
        },
        {
            "hi": "みゅ", "ro": "my"
        },
        {
            "hi": "みょ", "ro": "myo"
        },
        {
            "hi": "ぢゅ", "ro": "ju"
        }
    ];

    var inputEl = $("#input");
    var outputEl = $("#output");

    $("#convertBtn").click(function (){
        convert2JP();
    });

    $("#swapBtn").click(function (){
        var inputVal = inputEl.val();
        var outputVal = outputEl.val();

        inputEl.val(outputVal);
        outputEl.val(inputVal);
    });

    function convert2JP() {
        var str = inputEl.val();

        var output = "";

        for (var i = 0; i < str.length; i ++) {
            var char = str[i];

            if (char == "ゃ" || char == "ゅ" || char == "ょ" || char == "ゃ") {
                char = "";
            }

            if (str[i + 1] && str[i + 1] == "ゃ" || str[i + 1] == "ゅ" || str[i + 1] == "ょ" || str[i + 1] == "ゃ") {
                char = char + str[i + 1];
            }

            for (var j = 0; j < charMap.length; j++) {

                if (char == charMap[j]["hi"]) {
                    char = charMap[j]["ro"];
                    break;
                }
            }
            output += char;
        };


        outputEl.val(output);
    }

});