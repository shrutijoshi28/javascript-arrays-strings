//DFS

iterativePreorder(node)
  parentStack = empty stack
  while (not parentStack.isEmpty() or node ≠ null)
    if (node ≠ null) 
      visit(node)
      if (node.right ≠ null) 
        parentStack.push(node.right) 
      node = node.left   
    else     
      node = parentStack.pop();


iterativeInorder(node)
  parentStack = empty stack
  while (not parentStack.isEmpty() or node ≠ null)
    if (node ≠ null)
      parentStack.push(node)
      node = node.left
    else
      node = parentStack.pop()
      visit(node)
      node = node.right


iterativePostorder(node)
  parentStack = empty stack  
  lastnodevisited = null 
  while (not parentStack.isEmpty() or node ≠ null)
    if (node ≠ null)
      parentStack.push(node)
      node = node.left
    else
      peeknode = parentStack.peek()
      if (peeknode.right ≠ null and lastnodevisited ≠ peeknode.right) 
        /* if right child exists AND traversing node from left child, move right */
        node = peeknode.right
      else
        visit(peeknode)
        lastnodevisited = parentStack.pop();

//BFS

levelorder(root)
  q = empty queue
  q.enqueue(root)
  while not q.empty do
    node := q.dequeue()
    visit(node)
    if node.left ≠ null then
      q.enqueue(node.left)
    if node.right ≠ null then
      q.enqueue(node.right) 


// reverse a linked list
  public static Node reverse(Node head)
{
    // Checks if our Linked list is length 0 or 1.
    if(head == null || head.nextNode == null)
        return head;
    Node curr = head;
    Node next = head.nextNode;
    Node prev = null;

    // While our next node is not null,
    // keep reversing the next references of each
    // of Linked List's Nodes.
    while(next != null) 
    {
        curr.nextNode = prev;
        prev = curr;
        curr = next;
        next = next.nextNode;
    }
    // Reassign head as the current node.
    head = curr;
    head.nextNode = prev;

    return head;
}

//factorial iteratively

public static int factorial_iterative(int num)
{
    if ( num < 0 )
    {
        System.out.println("Factorial must be a positive integer.");
        return 0;
    }

    // Start at 1 since we're multiplying, not adding
    int fact = 1;

    // Loop from 1-num and multiply each time to fact
    for (int i = 1; i <= num; i++)
    {
        fact = fact*i;
    }

    return fact;
}

//calculate factorial recursively

public static int factorial_recursive(int num)
{
    if ( num < 0 )
    {
        System.out.println("Factorial must be a positive integer.");
        return 0;
    }

    // Return 1 once the factorial has bottomed out
    if (num == 1)
        return 1;
    // Otherwise, return num * factorial of num - 1
    return num * factorial_recursive(num - 1);
}
