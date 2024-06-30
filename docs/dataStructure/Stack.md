# Stack
在Java中，栈（Stack）是一种后进先出（LIFO, Last In First Out）的数据结构，
用于存储对象集合，其中最后一个添加到栈中的元素将是第一个被移除的元素。Java提供了几种方式来实现栈的功能：

### 1. 使用 `Stack` 类
Java中的 `Stack` 类是一个继承自 `Vector` 的类，提供了标准的栈操作。尽管它是传统的栈实现，但不推荐在新代码中使用，
因为它是同步的（即线程安全的），这可能会导致不必要的性能开销。

**基本操作包括：**
- `push(E item)`: 将元素压入栈顶。
- `pop()`: 移除并返回栈顶元素。
- `peek()`: 返回栈顶元素但不移除。
- `empty()`: 检查栈是否为空。
- `search(Object o)`: 返回对象在栈中的位置，以 1 为基底（到顶端的距离）。

**示例代码：**
``` java
package com.jasper.stack;

import java.util.Stack;

public class StackDemo {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        System.out.println("stack.peek() = " + stack.peek());

        System.out.println("stack.size() = " + stack.size());

        int size = stack.size();
        if (!stack.isEmpty()){
            for (int i = 0; i <size; i++) {
                Integer pop = stack.pop();
                System.out.println("pop = " + pop);
            }
        }
    }
}

```

### 2. 使用 `ArrayDeque` 类
推荐使用 `ArrayDeque` 类来实现栈功能，因为它更为高效且不是线程安全的（如果需要线程安全，可以使用适当的同步措施）。`ArrayDeque` 没有容量限制，相较于 `Stack` 类，它更快且更一致地表现出LIFO行为。

**基本操作包括：**
- `push(E item)`: 将元素压入栈顶。
- `pop()`: 移除并返回栈顶元素。
- `peek()`: 返回栈顶元素但不移除。

**示例代码：**
``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class StackDemo {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println("栈顶元素: " + stack.peek());  // 输出: 3
        System.out.println("弹出元素: " + stack.pop());   // 输出: 3
        System.out.println("栈是否为空: " + stack.isEmpty());  // 输出: false
    }
}
```

这两种实现方式都可以有效地表示栈的行为，但根据你的具体需求（如是否需要线程安全），选择 `ArrayDeque` 通常是更现代、更高效的做法。

