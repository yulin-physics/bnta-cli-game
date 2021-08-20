function list_to_tree(list) {
    var map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0") {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return list;
  }
  
  var entries = [{
      "id": "11",
      "parentId": "0",
      "message": `Are you ready to start the adventure? \n 1. Yes \n 2. No`,
      "level": "1",
      "children": null
    },
    {
      "id": "12",
      "parentId": "11",
      "message": `Which character do you want to be? \n 1. Mermaid \n 2. Warrior`,
      "level": "2",
      "children": null
    },
    {
      "id": "13",
      "parentId": "11",
      "message": "Okay, bye then!",
      "level": "2",
      "children": null
    },
    
    {
      "id": "14",
      "parentId": "12",
      "message": `You have to kill a vampire! Choose your weapon \n 1. Snake \n 2. Candlestick`,
      "level": "3",
      "children": null
    },
    {
      "id": "15",
      "parentId": "12",
      "message": "Do you love me?",
      "level": "3",
      "children": null
    },
  ];
  
  let tree = list_to_tree(entries);
  tree = tree[0].message;
  console.log(tree);