class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

    def middleNode(self, head):
        count = 0
        i = 0
        curr = head
        curr2 = head

        #get length of the list
        while curr:
            count += 1
            curr = curr.next
        
        count = (count // 2)

        #Traverse through the list and delete the nodes that are before the middle
        while curr2:
            if i < count:
                temp = curr2
                head = curr2.next
                del temp
            i += 1
            curr2 = curr2.next
        
        return head  