class singleLL:
    def __init__(self, value):
        self.value = value
        self.next = None

    def print(head):
        curr = head

        while curr is not None:
            print(curr.value),
        
            curr = curr.next

head = singleLL(1)
second = singleLL(2)
third = singleLL(3)

# Connect nodes
head.next = second
second.next = third

singleLL.print(head)