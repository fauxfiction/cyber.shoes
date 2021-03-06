cyber = {
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
    },
    gloves: {
        handLeText: function(textNode) {
            var value = textNode.nodeValue;
            value = value.replace(/\b(C|c)yber/g, function(match, c, offset, string) {
                // c is either 'C' or 'c' depending on whether cyber was upper or lower case
                    if (c === "c")
                        return "shoe";
                    if (c ==="C")
                        return "Shoe";
            });

            value = value.replace(/\bCYBER/g, "SHOE");
            value = value.replace(/\bcyborg/g, "shoeborg");
            value = value.replace(/\bCyborg/g, "Shoeborg");

            textNode.nodeValue = value;
        },
    },
};

// Cyber runner
cyber.shoes.walk(document.body);
