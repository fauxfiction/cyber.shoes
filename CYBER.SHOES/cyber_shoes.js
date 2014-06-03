cyber = {
    shoe: "shoe",

    shoes: {
        walk: function(node) {
            // I stole this function from here:
            // https://github.com/hank/cloud-to-butt/blob/master/
                // He stole this function from here:
                // http://is.gd/mwZp7E

            var child, next;
            switch (node.nodeType) {
                case 1: //Element
                case 9: //Document
                case 11: //Document Fragment
                    child = node.firstChild;
                    while (child) {
                        next = child.nextSibling;
                        cyber.shoes.walk(child);
                        child = next;
                    }
                    break;
                case 3: //Text node
                    if (node.parentElement.tagName.toLowerCase() != "script") {
                        cyber.gloves.handLeText(node);
                    }
                    break;
            }
        },

        repLace: function(fullMatch, segmentMatch, offset, string) {
            var replaceArray = cyber.shoe.split("");
            for ( var i = 0;
                  i < segmentMatch.length && i < replaceArray.length;
                  ++i
            )
            {
                if (segmentMatch[i] == segmentMatch[i].toUpperCase()) {
                    replaceArray[i] = replaceArray[i].toUpperCase();
                }
            }
            if (segmentMatch.length < fullMatch.length) {
                replaceArray.push(fullMatch.substring(segmentMatch.length));
            }
            return replaceArray.join("");
        }
    },
    gloves: {
        handLeText: function(textNode) {
            var value = textNode.nodeValue;

            value = value.replace(/\b(cyber)/gi, cyber.shoes.repLace);
            value = value.replace(/\b(cy)b/gi, cyber.shoes.repLace);

            textNode.nodeValue = value;
        },
    },
};

// Cyber runner
cyber.shoes.walk(document.body);
