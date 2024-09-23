---
title: "[C#] Async, Await"
date: "2024-9-23"
thumbnail: "/assets/img/etc.jpg"
---

# [C#] Async, Await

- 이름만 들어도 비동기 프로그래밍!

```
//일반적인 경우
static Task Test()
{
	Console.WriteLine("Start Test");
	Task t = Task.Delay(3000);
	return t;
}
static void Main()
{
	Task t = Test();
	t.Wait();
	//3초 후 실행됨
	Console.WriteLine("While start");
}
```

```
//비동기를 사용하는 경우
static Task Test()
{
	Console.WriteLine("Start Test");
	Task t = Task.Delay(3000);
	return t;
}
static async void TestAsync()
{
	Console.WriteLine("Start TestAsync");
	Task t = Task.Delay(3000);
	
	await t;
	Console.WriteLine("End TestAsync");
}
static void Main()
{
	TestAsync();
	//3초 후 실행됨
	Console.WriteLine("While start");
}
```

