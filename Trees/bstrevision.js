//binary search tree revision

function BinarySearchTree() {
//initializes a tree with root = null
    this._root = null;
    console.log("A new tree has been created with no elements");
}

BinarySearchTree.prototype = {

	// body...
	addNode : function(value){
		var node = {
			value : value,
			left : null,
			right : null
		};

		var current;
		//no root then assign value to the root
		if(this._root == null){
			this._root = node;
		}else{
			current = this._root;
		

		while(true){
			if(value < current.value)
			{
				if(current.left == null)
				{
					current.left = node;
					break;
				}
				//else move left
				else{
					current = current.left;
				}
			}
			else if(value > current.value)
			{
				if(current.right == null)
				{
					current.right = node;
					break;
				}
				//else move left
				else{
					current = current.right;
				}
			}
			//value already present in tree. check for if value equals current node.
			else{
				console.log("Cannot add duplicates in tree");
				break;
			}
		}
	}
		console.log(this._root);
	},

	search : function(value){
		var found = false;
		var current = this._root;

		while(!found && current){
			//check if value is less than current move left
			if(value < current.value)
			{
				current = current.left;
			}
			if(value > current.value)
			{
				current = current.right;
			}
			if(value = current.value)
			{
				found = true;
				console.log("Value found at"); 
				console.log(current);
			}
		}
		if(!found){
			console.log("Value not found");
		}
	},

	inorder : function(node){

   		if(node){
      		BinarySearchTree.prototype.inorder(node.left);
      		console.log(node.value);
      		inorder= node.value;
      		BinarySearchTree.prototype.inorder(node.right);
   		}
	},

	preorder : function(node){
   		if(node){
   			console.log(node.value);
      		BinarySearchTree.prototype.preorder(node.left);
      		BinarySearchTree.prototype.preorder(node.right);
   		}
	},

	postorder : function(node){
   		if(node){

      		BinarySearchTree.prototype.postorder(node.left);
      		BinarySearchTree.prototype.postorder(node.right);
      		console.log(node.value);
   		}
	},

	height: function (node){
	   if(!node) return 0;
	   var leftHeight = BinarySearchTree.prototype.height(node.left);
	   var rightHeight = BinarySearchTree.prototype.height(node.right);
		if(leftHeight > rightHeight)
		        return leftHeight + 1;
		    else
		        return rightHeight +1 
	},

	commonAncestor: function (node, n1, n2){
		   if(!node) return;
	   		var val = node.value; //40


	    if(n1 < val && n2<val){
	     	return BinarySearchTree.prototype.commonAncestor(node.left, n1, n2);
		   }
		if(n1<val && n2<val){
		     return BinarySearchTree.prototype.commonAncestor(node.right, n1, n2);
		  }
		  console.log('lowest common ancestor value: ', val);
		  return node;
	},

	mirror : function(node){
		var nodemirror = node;
		if(nodemirror != null)
		{
			var temp = nodemirror.left;
			nodemirror.left = nodemirror.right;
			nodemirror.right = temp;
			BinarySearchTree.prototype.mirror(nodemirror.left);
			BinarySearchTree.prototype.mirror(nodemirror.right);
		}
		 return nodemirror;
	},

	/*Thanks to LJW489 for suggesting this method.
1) Do In-Order Traversal of the given tree and store the result in a temp array.
3) Check if the temp array is sorted in ascending order, if it is, then the tree is BST.

Time Complexity: O(n)

We can avoid the use of Auxiliary Array. While doing In-Order traversal, we can keep track of previously visited node. 
If the value of the currently visited node is less than the previous value, 
then tree is not BST. Thanks to ygos for this space optimization.*/

	checkIfBST : function(node){
		var prev = null;
     
    // traverse the tree in inorder fashion and keep track of prev node
    if (node)
    {
        if (!this.checkIfBST(node.left))
          return false;
 
        // Allows only distinct valued nodes 
        if (prev != null && node.value <= prev.value)
          return false;
        prev = node;

        return this.checkIfBST(node.right);
    }
 
    return true;

	},

	dfs : function(node){
		  if(node){
		    console.log(node.value);
		    this.dfs(node.left);
		    this.dfs(node.right);
		  }
		}, 

	/*To find maximum number of levels a tree has is to find height of the tree. Once we have height, go to every level less than height and print nodes at that level. 

At every node, keep track of level being visited in tree. At root, start with desired level. As we move down, we decrement the level by one. Once current level becomes 1, node is at the desired level and hence printed.
At every node traversed down from node, we so the same processing with desired level decremented.
This step can be implemented recursively. Base case for recursion is evident from above discussion i.e when level is equal to 1, print node and return.  Otherwise, recurs with desired level down by one.

For example in tree given above if we want to print nodes at level 2, we call function as print_level(root, 2)  and decrement count every time we call print_level. When count becomes one, we print the node.

Algorithm

1. Find height ht of the tree.
2. For each level from level 0 to level ht repeat step 3 to 6
3. Start from root and try to print node with desired level taken in step 2 or step 5
4. If level count is one, print the node.
5. If not, then decrement level count, move down towards left and right recursively and go to step 3.

In the first method, since we are traversing N for every level we print, so complexity comes O(NlogN).
*/	

	levelOrderPrint : function(node){
	 var h = this.height(this._root);
    for(var i =1; i<=h; i++){
        console.log("Level:", +i);
        this.printTreeLevelRec(this._root, i);
        // process.stdout.write("\n");
    }
	},   

	printTreeLevelRec : function(node, desiredLevel){
    if(node === null){ return;
    }
    if (desiredLevel == 1){
        console.log(node.value);
        //process.stdout.write("hello: ");
    }

    this.printTreeLevelRec(node.left, desiredLevel-1);
    this.printTreeLevelRec(node.right, desiredLevel-1);
	},

};

var tree = new BinarySearchTree();

console.log("****************CREATE TREE*********************");
tree.addNode(40);
tree.addNode(25);
tree.addNode(32);
tree.addNode(78);
tree.addNode(10);

console.log("****************FIND VALUE*********************");

tree.search(25);

console.log("****************INORDER TRAVERSAL*********************");
tree.inorder(tree._root);
console.log("****************PREORDER TRAVERSAL*********************");
tree.preorder(tree._root);
console.log("****************POSTORDER TRAVERSAL*********************");
tree.postorder(tree._root);

console.log("****************HEIGHT*********************");
var height = tree.height(tree._root);
console.log(height);

console.log("****************COMMON ANCESTOR*********************");
tree.commonAncestor(tree._root, 10, 78);


// console.log("****************MIRROR*********************");
// var mirror = tree.mirror(tree._root);
// console.log(mirror);

console.log("****************CHECK IF IT IS A BinarySearchTree*********************");
var check = tree.checkIfBST(tree._root);
if(check){console.log("It is a BST")} else{console.log("It is not a BST");}


console.log("****************DFS*********************");
tree.dfs(tree._root);

console.log("****************Level by Level*********************");
tree.levelOrderPrint(tree._root); 