---
date: 2019-01-04T19:00:00.0+02:20
title: Cozying up with WSL
---

Thanks to a mysterious failure in my MacBook Pro while traveling for the holidays, I've been using a Windows 10 machine full time for almost two weeks. At work, I use Windows for email and Office365 apps, so it's not terra incognita. It's the first time in a long time, however, that I can't just reach over for my Mac and use the setup I'm used to for working with code.

This has meant that I've gotten a chance to spend a lot more time with the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/faq?WT.mc_id=duncandavidson.com-blog-duncand). I was pretty excited by this when it was announced two years ago, even tho it was very much a first release, and it's gotten so much better since then.

There are still some gotchas when using it with Windows GUI apps --- such as when you want to use [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=duncandavidson.com-blog-duncand). It took me a while, for example, to sort out that I really wanted to put my source code at `/mnt/c/source` (aka `C:\source`) so that it was in an easy place to get to in both systems. And that while I wanted to use the Linux version of development tools like `npm` and `ruby`, I should use the Windows installation of `git` so that it can use the [Windows Credential Store](https://docs.microsoft.com/en-us/windows/desktop/secauthn/credentials-management?WT.mc_id=duncandavidson.com-blog-duncand) to cache passwords in.

Once settled in, it's a pretty nice place to be. It's, dare I say it, a workable Linux on the desktop. Not that it's the Linux on the desktop that many of us wanted twenty years ago. But pretty good.
