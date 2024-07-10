class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
    
    def reverseList(self, head):
        newNode = None
        curr = head

        while curr:
            next = curr.next #save first
            curr.next = newNode
            newNode = curr
            curr = next

        return newNode