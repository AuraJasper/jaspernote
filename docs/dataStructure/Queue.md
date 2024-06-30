# Queue

在Java中，`ArrayDeque` 和 `LinkedList` 都可以被用作队列。这两个类都实现了 `Deque`
接口，因此提供了双端队列的功能，允许元素被添加或移除于队列的头部或尾部。下面，我将分别说明如何使用 `ArrayDeque`
和 `LinkedList` 作为队列。

### 1. 使用 `ArrayDeque` 作为队列

`ArrayDeque` 是基于数组的双端队列实现，它通常比 `LinkedList` 更快，因为它有更低的内存开销和更优的性能（尤其是在添加或移除元素时）。

**基本操作：**

- **添加元素：** 使用 `add(e)` 或 `offer(e)` 将元素 `e` 添加到队列的尾部。
- **移除元素：** 使用 `remove()` 或 `poll()` 从队列的头部移除元素。
- **检查元素：** 使用 `element()` 或 `peek()` 查看队列的头部元素而不移除。

下面是一个表格，详细对比了 `ArrayDeque` 类中 `add`, `offer`, 和 `push` 方法的主要区别和用途：

| 方法         | 添加位置 | 返回值       | 异常抛出                       | 用途描述                                                      |
|------------|------|-----------|----------------------------|-----------------------------------------------------------|
| `add(e)`   | 队列尾部 | `boolean` | 抛出 `IllegalStateException` | 添加元素到队列尾部，如果队列满则抛出异常（理论上不会发生，因为 `ArrayDeque` 动态扩容）        |
| `offer(e)` | 队列尾部 | `boolean` | 不抛出异常                      | 添加元素到队列尾部，如果队列满返回 `false`（在 `ArrayDeque` 中通常总是返回 `true`）  |
| `push(e)`  | 队列头部 | 无返回值      | 抛出 `IllegalStateException` | 将元素推入到队列头部，用于栈操作，如无法添加则抛出异常（理论上不会发生，因为 `ArrayDeque` 动态扩容） |

### 详细说明：

- **`add(e)`** 和 **`offer(e)`** 都是向队列的尾部添加元素，但 `add(e)` 在添加失败时会抛出异常，而 `offer(e)`
  则会返回 `false`。在 `ArrayDeque` 使用中，由于它具备自动扩容的特性，这两个方法在实际应用中的表现基本一致，几乎不会因为容量问题而失败。
- **`push(e)`** 是将元素添加到队列的头部，这是一个栈操作（后进先出），这与 `add(e)` 和 `offer(e)`
  的队列操作（先进先出）相反。`push(e)` 方法没有返回值，如果添加失败（如内存限制），它会抛出 `IllegalStateException`。

### 使用建议：

- 当你需要队列功能，并且希望通过返回值检测插入操作是否成功时，使用 `offer(e)`。
- 当你不关心插入失败的具体原因，只需要简单的插入元素到队列尾部，可以使用 `add(e)`。
- 当你使用 `ArrayDeque` 作为栈操作，需要将元素添加到队列的前端时，使用 `push(e)`。

``` java
import java.util.ArrayDeque;
import java.util.Queue;

public class Example {
    public static void main(String[] args) {
        Queue<Integer> queue = new ArrayDeque<>();

        // 添加元素
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);

        // 检查元素
        System.out.println("队列头部元素: " + queue.peek());  // 输出: 1

        // 移除元素
        while (!queue.isEmpty()) {
            System.out.println("移除元素: " + queue.poll());  // 输出: 1, 2, 3
        }
    }
}
```

### 2. 使用 `LinkedList` 作为队列

`LinkedList` 实现了 `List` 和 `Deque`
接口，是基于节点的双端队列。它允许快速的插入和删除操作，但每次访问元素时，性能略逊于 `ArrayDeque`，因为它需要节点间的遍历。

**基本操作：**

- **添加元素：** 使用 `add(e)` 或 `offer(e)`。
- **移除元素：** 使用 `remove()` 或 `poll()`。
- **检查元素：** 使用 `element()` 或 `peek()`。

**示例代码：**

``` java
import java.util.LinkedList;
import java.util.Queue;

public class Example {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();

        // 添加元素
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);

        // 检查元素
        System.out.println("队列头部元素: " + queue.peek());  // 输出: 1

        // 移除元素
        while (!queue.isEmpty()) {
            System.out.println("移除元素: " + queue.poll());  // 输出: 1, 2, 3
        }
    }
}
```

### 选择建议

- 如果您需要高性能队列操作并且不需要索引访问，`ArrayDeque` 是更好的选择。
- 如果您需要双端队列的功能或同时实现列表和队列的操作，`LinkedList` 可能是更适合的选择。