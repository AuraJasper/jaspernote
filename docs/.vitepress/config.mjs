import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'jaspernote',
  title: "jaspernote",
  lastUpdated: true,
  ignoreDeadLinks: true,
  description: "jasper learn note",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    outline: {
      level: 3,
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/jaspercliff">jaspercliff</a>',
    },
    nav: [
      {
        text: "java",
        items: [
          { text: "java核心基础", link: "/outline/java核心基础.md" },
          { text: "jvm", link: "/outline/jvm.md" },
          { text: "framework", link: "/outline/javaFramework.md" },
          { text: "设计模式", link: "/outline/designPattern.md" },
        ],
      },
      {
        text: "数据库",
        items: [
          { text: "mysql", link: "/outline/mysql.md" },
          { text: "redis", link: "/outline/redis.md" },
          { text: "sqllite", link: "/outline/sqlite.md" },
        ],
      },
      {
        text: "对象存储",
        items: [
          { text: "minio", link: "/outline/minio.md" },
          // { text: "阿里云", link: "/item-5" },
        ],
      },
      { text: "数据结构", link: "/outline/dataStructure.md" },
      {
        text: "linux",
        items: [],
      },
      {
        text: "utils",
        link: "/utils/index.md",
      },
      {
        text: "python",
        link: "/outline/python.md",
      },
      {
        text: "java_related_website",
        link: "/outline/java_related_website.md",
      },
    ],
    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      "/java/": [
        {
          text: "java核心基础",
          items: [
            {
              text: "java核心基础",
              collapsed: true,
              items: [
                {
                  text: "基础",
                  link: "/java/basic/basic.md",
                },
                {
                  text: "面向对象",
                  link: "/java/basic/object-oriented.md",
                },
                { text: "枚举", link: "/java/basic/enum.md" },
                { text: "注解", link: "/java/basic/注解.md" },
                { text: "异常", link: "/java/basic/异常.md" },
                { text: "泛型", link: "/java/basic/泛型.md" },
                { text: "反射", link: "/java/basic/反射.md" },
                { text: "io", link: "/java/basic/io.md" },
                { text: "网络编程", link: "/java/basic/网络编程.md" },
                { text: "utils", link: "/java/basic/utils.md" },
                { text: "terminology", link: "/java/basic/terminology.md" },
              ],
            },
            {
              text: "collections",
              collapsed: true,
              items: [
                {
                  text: "basic",
                  link: "/java/collection/index.md",
                },
                {
                  text: "ArrayList",
                  link: "/java/collection/ArrayList.md",
                },
                {
                  text: "LinkedList",
                  link: "/java/collection/LinkedList.md",
                },
                {
                  text: "HashMap",
                  link: "/java/collection/HashMap.md",
                },
              ],
            },
            {
              text: "线程",
              collapsed: true,
              items: [
                {
                  text: "basic",
                  link: "/java/thread/basic.md",
                },
                {
                  text: "线程基础",
                  link: "/java/thread/线程基础.md",
                },
                {
                  text: "锁",
                  link: "/java/thread/锁.md",
                },
                {
                  text: "volatile",
                  link: "/java/thread/volatile.md",
                },
                {
                  text: "final",
                  link: "/java/thread/final.md",
                },
                {
                  text: "unsafe",
                  link: "/java/thread/unsafe.md",
                },
              ],
            },
            {
              text: "juc",
              collapsed: true,
              items: [
                {
                  text: "basic",
                  items: [
                    {
                      text: "basic",
                      link: "/java/juc/basic.md",
                    },
                  ],
                },
                {
                  text: "collection",
                  items: [
                    {
                      text: "collection",
                      link: "/java/juc/collections/basic.md",
                    },
                  ],
                },
                {
                  text: "lock",
                  items: [
                    {
                      text: "ReentrantLock",
                      link: "/java/juc/lock/ReentrantLock.md",
                    },
                    {
                      text: "ReentrantReadWriteLock",
                      link: "/java/juc/lock/ReentrantReadWriteLock.md",
                    },
                    {
                      text: "LockSupport",
                      link: "/java/juc/lock/LockSupport.md",
                    },
                  ],
                },
                {
                  text: "atomic",
                  items: [
                    {
                      text: "Atomic",
                      link: "/java/juc/atomic/atomic.md",
                    },
                  ],
                },
                {
                  text: "executor",
                  items: [
                    {
                      text: "FutureTask",
                      link: "/java/juc/executor/FutureTask.md",
                    },
                    {
                      text: "线程池",
                      link: "/java/juc/executor/线程池.md",
                    },
                  ],
                },
                {
                  text: "tool",
                  items: [
                    {
                      text: "CountDownLatch",
                      link: "/java/juc/tools/CountDownLatch.md",
                    },
                    {
                      text: "CyclicBarrier",
                      link: "/java/juc/tools/CyclicBarrier.md",
                    },
                    { text: "Semaphore", link: "/java/juc/tools/Semaphore.md" },
                    { text: "Phaser", link: "/java/juc/tools/Phaser.md" },
                    { text: "Exchanger", link: "/java/juc/tools/Exchanger.md" },
                  ],
                },
                {
                  text: "ThreadLocal",
                  link: "/java/juc/ThreadLocal.md",
                },
              ],
            },
          ],
        },
      ],
      "/java/jvm/": [
        { text: "JMM", link: "/java/jvm/JMM.md" },
        { text: "jvm内存结构", link: "/java/jvm/jvm内存结构.md" },
        { text: "锁的优化和升级", link: "/java/jvm/锁的优化和升级.md" },
        { text: "类加载", link: "/java/jvm/类加载.md" },
        { text: "垃圾回收", link: "/java/jvm/gc.md" },
      ],
      "/java/framework/": [
        {
          text: "spring",
          collapsed: true,
          items: [
            {
              text: "core",
              collapsed: true,
              items: [
                { text: "ioc", link: "/java/framework/spring/core/ioc.md" },
                { text: "aop", link: "/java/framework/spring/core/aop.md" },
              ],
            },
            {
              text: "dataAccess",
              items: [
                {
                  text: "transaction",
                  link: "/java/framework/spring/dataAccess/transaction.md",
                },
              ],
            },
          ],
        },
        {
          text: "springBoot",
          collapsed: true,
          items: [],
        },
        {
          text: "springSecurity",
          collapsed: true,
          items: [
            { text: "index", link: "/java/framework/springSecurity/index.md" },
          ],
        },
      ],
      "/java/designPattern/": [
        {
          text: "创建型",
          collapsed: true,
          items: [
            {
              text: "单例模式",
              link: "/java/designPattern/creational/singleton.md",
            },
          ],
        },
        {
          text: "结构型",
          collapsed: true,
          items: [
            {
              text: "代理模式",
              link: "/java/designPattern/structural/proxy.md",
            },
          ],
        },
        {
          text: "行为型",
          collapsed: true,
          items: [],
        },
      ],
      "/database/mysql": [
        {
          text: "mysql",
          items: [
            { text: "index", link: "/database/mysql/index.md" },
            { text: "数据类型", link: "/database/mysql/数据类型.md" },
            { text: "存储引擎", link: "/database/mysql/存储引擎.md" },
            { text: "索引", link: "/database/mysql/索引.md" },
            { text: "事务隔离级别", link: "/database/mysql/事务隔离级别.md" },
            { text: "log", link: "/database/mysql/log.md" },
            { text: "锁及mvcc", link: "/database/mysql/锁及mvcc.md" },
            { text: "jdbc", link: "/database/mysql/jdbc.md" },
          ],
        },
      ],
      "/database/redis": [
        {
          text: "redis",
          items: [{ text: "index", link: "/database/redis/index.md" }],
        },
      ],
      "/objectStorage/minio": [
        {
          text: "minio",
          items: [
            { text: "index", link: "/objectStorage/minio/index.md" },
            { text: "minio in java", link: "/objectStorage/minio/java.md" },
          ],
        },
      ],
      "/dataStructure": [
        {
          text: "datastructure",
          items: [
            { text: "index", link: "/dataStructure/index.md" },
            { text: "stack", link: "/dataStructure/Stack.md" },
            { text: "queue", link: "/dataStructure/Queue.md" },
            { text: "Hash", link: "/dataStructure/Hash.md" },
            { text: "动态规划", link: "/dataStructure/动态规划.md" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jaspercliff" },
      { icon: "twitter", link: "..." },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229 .826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .139.047c.134 0 .242-.114.242-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.031zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>',
        },
        link: "你的微信公众号链接或其他相关链接",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 16.89 1 12 1S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a38.97 38.97 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.480.714-.259.993.338.426 1.645.685 2.876.774.821.059 1.652.061 2.406.001l.344-.028c.189 0 .358.001.358.001l.38-.028h.041a12.51 12.51 0 0 0 2.406-.001c1.231-.089 2.537-.348 2.876-.774.221-.279.174-.672-.26-.993-.483-.356-1.233-.647-1.846-.835 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.104 2.472.251-.030.581-1.39-.439-4.673z"/></svg>',
        },
        link: "你的QQ链接或其他相关链接",
      },
    ],
  },
});
