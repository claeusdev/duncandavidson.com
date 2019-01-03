---
title: My Empathy Wobble
date: 2018-10-25
lede: The exit is the dream, right? It’s in moments of change when you find out just how hard things can get and how easy it can be to become the villian in someone else’s story.
note: I initially gave this talk as a keynote at the 2018 <a href="https://www.0111conf.com/">0111 CTO Conference</a> in San Diego and reprised it as a general session for <a href="https://websummit.com/">WebSummit 2018</a> in Lisbon a few weeks later. Since it was for a keynote at a CTO conference and one of the big challenges for CTOs and other senior technical leaders is found in the intersection of managing teams of people and the technology, I wanted to dig deep into one of my failures in this area. I probably won’t reprise this talk again in this form, but will draw bits of it into future presentations.
layout: page
tags: talk
---

It’s late summer 2015 and I’m sitting on a flight with a few of my colleagues to Seattle. The acquisition of the company that we worked for had just closed, and even though I wasn’t one of the founders plotting what to do with an excellent new life-changing bank account, I was excited by the week of meetings ahead to plan the future.

I was also feeling pretty accomplished, having just played my role in completing the most intense half-year technical due diligence process I’d ever been part of.

The due diligences I’ve done in the past for VCs were to help them manage the risk of their investment and typically lasted a few days or maybe weeks. Yes, investors want to be careful, but they’re already accepting the risk of loss and their downside is limited to their investment.

When one of the largest market cap companies in the world buys a much smaller one, the risk is so much more than what’s involved in a simple investment. Hidden liabilities, such as security faults or license violations can cost several times the value of the deal. A 100 million dollar deal can have risks that conceivably go to the billions.

Naturally, the intensity goes up so that the people signing the checks can stomach the risk.

Another complicating factor was how we built our app. We built our backend service out of dozens of microservices written in a variety of languages. From Java to Node, Scala to Haskell, Go to Clojure, Python to Ruby, man, we were polyglot.

And of course, we developed this before the recent container orchestrator revolutions, which meant that we relied on a pile of homemade scripts that deployed everything. When our reviewers wanted to run a copy of the entire backend infrastructure on their own, well, we wished them a lot of luck.

The most intense part of the due diligence was a set of automated scans. Imagine a search engine that has all of Stack Overflow, GitHub, and more loaded up in it. Now, imagine running your codebase through it. Every bit of our code that looked similar to something in public had to be vetted, explained, and possibly changed to neutralize any liabilities. Across all of our various codebases.

Now, I’m sure you’ve never copied, and pasted source code from Stack Overflow and put it in your production codebase, have you? And if so, surely all the correct attributions are in place to make things legit, right?

Yeah. Right.

It was a lot of work to clean things up, find and correct attributions, and replace code that was under licensing terms that were acceptable to us as a little company, but not so good for the company acquiring us. And all of this work was done with just a couple of people because of confidentiality requirements in the deal. Most of our staff had no idea what we were doing making random looking changes in our codebases.

As the months progressed, we reduced thousands of questions and action items to hundreds, and tens and then finally it was done. The deal closed. We told everyone in the company what was going on and we all got offers to stay on and join Microsoft.

That’s where I was on that plane ride. Feeling good, and hopeful about what was to come. We’d navigated the acquisition, the rest should be easy...

So, what came next? Our marching orders from our new overlords at first were clear. Keep going. Nothing changes.

Good story, right?

It’s the kind of thing you want to hear when you’re in our position. But, it takes a strong vision and plans to stay on course, even when there are not massive changes going on.

Unfortunately, in the months after the acquisition closed, our leadership structure changed pretty drastically, mostly due to reasonable causes. Babies were born. People needed to relocate for family reasons. All perfectly good things, but the result is that we had a pretty serious vision wobble, right at the moment where we were finding our way inside a huge company.

Those of us who tried to fill in the gap bounced between ruinous empathy, obnoxious aggression, and manipulative insincerity.

If you’ve read [Radical Candor](https://www.radicalcandor.com/), you’ll recognize these as the three quadrants of Kim Scott’s 2 by 2 matrix that you want to stay out of. Unfortunately, many of us became masters of them, especially ruinous empathy. The harder things got to say, the more we didn’t say anything.

Of course, a vital duty of any management team is to bridge between their stakeholders and their team in a way that is true the values of both sides. And the most significant struggle that my colleagues on the leadership team and I faced was making this bridge.

What’s an example of this? As an independent company, our service team was composed of Linux-based polyglot micro-service badasses. We attracted our talent based on this. That’s what they came to work on. That was their priority. To be honest, many weren’t really there because they believed in the product. The product was a vehicle to do what they wanted to do.

Fair enough. Everyone always has their own reasons for doing something and as long as things line up well for everyone, as long as thing are aligned, it works.

After the merger, we now needed to integrate with systems that weren’t polyglot — nor written in any of the languages that we had expertise in, and definitely were not what we would call micro-services.

The reasons we needed to integrate made sense, but as much as we tried to explain it, as much as the logic worked, the path didn’t resonate with our bad-asses who were there to build polyglot micro-services.

We didn’t have alignment.

We came to consensus many times. We even tried in different ways. But without real alignment, agreements don’t stick.

As Tom Cox says:

> Alignment beats consensus every time. When you’re aligned, you give up your right to say “I told you so.” You stop snickering in hallway conversations about how the other guy blew it, and how it all would have been different if only “they” had listened to you. You no longer see two guys in a lifeboat with one laughing and saying “there’s a leak in your end of the boat.” When we have alignment, we all realize we’re all in the same boat.

Man.

In the midst of this it also turns out that I had a wobble of my own. One that’s more subtle, and one that frankly caught me by surprise. It was an empathy wobble.

Trust is based on authenticity, logic, and empathy. Evaluating myself over the years, I’ve long thought I was OK at this. I’m pretty good at logic, and I’m not bad at relating to people. And, I do pretty well at authenticity, at least according to the tests and 360 reviews I’ve done.

But, much to my surprise, I suck at empathy in a particular way.

My blind spot comes in when dealing with other people’s reactions to perfectly logical things. For example, I’m a science nut. I love science, such much so that I’ve driven my wife absolutely bonkers saying to my son “Gravity is working! Space is expanding!” when he drops something out of his high chair. It drives her nuts.

Or the fact that I changed the part in Twinkle Twinkle Little Star that goes “How I wonder what you are.”

I know what that star is. It’s a big ball of flaming gas. What kind of gas? Just look at the spectrum of light from it and figure it out. No, what I really want to know is where that star is, and that means knowing how far away it is. And because of that, I want to know how long ago the light I’m seeing left that star. So when I sing the song to my son, I sing it as “How I wonder when you were.”

God, I’m a geek.

The point is: If we don’t agree that science works to explain the world around us, I’ve got a hard time understanding you, and I’m likely not going to cut you any slack for it. And some of the time, I won’t realize it.

This applied in my attempts to bridge between my management and the people on our team. I didn’t — I couldn’t — understand why the logic in our plans wouldn’t carry the day. And, unfortunately, I didn’t show empathy for the people those plans affected and their priorities at the moment. At least not in a way that showed that I understood and accepted their point of view.

As [Frances Frei](https://www.hbs.edu/faculty/Pages/profile.aspx?facId=6587) explains [how empathy wobbles destroy trust in her TED Talk](https://www.ted.com/talks/frances_frei_how_to_build_and_rebuild_trust), the result is that they didn’t believe that I was in it for them and that I was too self-distracted to care. It didn’t matter that the logical course, had the best chance for good outcomes for their jobs and how our group was perceived in the bigger company or our future together. It didn’t matter that if we won at this game, we could have written our future as a team together.

That wasn’t the point, even though I thought it was.

We had other challenges to be sure, but working on those challenges was complicated by our foundational challenges of trust and alignment. We learned some really tough lessons the hard way through the experience. Ones that have radically shaped how I think about the teams I work with today.

Some people make it look easy. There was another team acquired by Microsoft at roughly the same time. The team was Accompli, and they made a well-loved email app on iOS and Android. They got a lot of traction, a lot of good press, and a good user base.

When they came into the company, they knew exactly what they were bought for. Microsoft does email. They did email. Microsoft needed a mobile mail client. Accompli was a great one. Even better, it already talked to Exchange. It didn’t support all of Exchange’s features, but it was already in a good place to be a great mobile app for Office365 customers.

They had a plan and wasted no time in executing it. The product was quickly renamed “Outlook” and rebranded entirely. Then they went on a mission to smooth out the bumps, move their back-end services to integrate with Exchange and the rest of Office 365, and to then look at how to better blend with the rest of Microsoft products.

In the years since, I’ve talked several times with their leadership and have a lot of respect for how much work it took to get their team to make the turn into the new company, re-align on their mission, and execute. They went from “we make a great mobile email client” to “Ok, we’re part of Microsoft, here’s what we do next” to “We make the best version of Outlook on any platform,” and they’ve been doing great things ever since.

Sure, many of the original Accompli people have moved on by now. But everyone won in the deal because of a strong continuity in leadership through the acquisition. More importantly, the people that weren’t thrilled to join a big company at least knew what the deal was and how to navigate the process in a way that worked for them.

Of course, I know they had their set of challenges. But the fact that they were able to keep their team aligned and on mission through their integration sure helped make it look easy from the outside.

What you can take home from this?

The reason we share experiences like this is that it’s at the margins where we learn that the simple-sounding lessons others talk about actually have depth and meaning. So, here’s six things I leave you with to consider.

First, choose what to keep. Do it together.

When the company I worked for was acquired, I knew that a lot of changes were inevitable and not really worth putting up resistance or getting worked up about. Our email would move from Google to Exchange. Our files would move from Dropbox to OneDrive. We’d use Skype for Business instead of Hangouts.

Of course, our staff didn’t like those changes. I didn’t either. I still fumble with Skype for Business, for example. Luckily, Teams is replacing it, and it’s so much better.

But, you get my point. Whether those are good or bad changes, it’s not material. There are more important things to actually spend energy and time to try to fight for. I knew it at the time, but what I wish I’d done is actually sit down with my teams and make that list of things to fight for together.

Second, be intentional and careful in technology choices.

Polyglot programming is a win. There’s nothing more liberating than having somebody on your team try an experiment in a new language and seeing how its can make a particular problem melt away. For example, I gained mad respect for Akka this way, and it changed my brain because we did some work with it and learned a new way to approach a whole class of problems. I also learned that Scala is almost as bad as Perl for maintainability when people go crazy with it.

But, we might have gone a little far. You need a balance between too much stability and too much chaos. While I would never want to work in a single language shop again, I want everyone on my team to have enough depth in the languages that we use to be able to collaborate across the codebase. After playing with so many languages, at this point, I might choose two or three as primary development languages and make sure that everyone has deep knowledge with them.

Third: Know what your company was bought for.

It’s funny. When we came into Microsoft, everyone on our team and in our management had their own answer to the question of why we were bought. There were significant differences in the range between, “We were brought in to integrate our product into Office” to “We were bought because we’re smart and awesome, and we know consumer products and we’re going to teach Microsoft how to do it right.”

Lean too much towards the latter, and you come off sounding like a know-it-all jerk, and then you get dismissed. Ignored.

So really having agreement on what it is that you’re bringing to the table is essential. Then you can focus on things you can control and stop worrying about the things you can’t.

As much as Google gets flack for quickly shutting down many of the products from their acquisitions, I actually have a lot of understanding now for why they do this. It shows that they have identified what they want from the purchase and are hurrying to integrate it while shutting off distractions. Sure, it sucks for the users of a product. But you can see the sense.

Fourth: Recruit, re-hire, and re-align the people.

It’d be easy to assume that everyone being acquired wants to work at the new company, gets what is expected of them, what their new titles mean, and can shift gears into their new role. Oh sure, many acquisitions provide some sort of incentive for people to stay a year or two (or more) because we know this isn’t strictly true. But a bonus after a holding period simple makes somebody show up. It doesn’t automatically mean they’ll continue to be an excellent part of your team.

While the team may still be sitting together, it’s a mistake to assume that they will operate as they always have in all the same ways they did. Their context has changed. They’re observing what’s going on, re-orienting and making decisions about what they want. You know they’re qualified, you know what they’re capable of, but you need to get them engaged, aligned, excited, and on-board again. Or you need to figure out with them what should come next and work to make that happen.

Let me be clear: It’s OK if people aren’t on board with the new role.

What’s not OK is expecting them to automatically be on board or to leave them floundering in uncertainty if they’re not. That way leads to a bad situation, and one that brings out the worst in everyone involved. It’ll especially surprise you if, like me, you’ve managed to live most of your life as the good guy and suddenly you’re not.

Fifth: Remember that culture is the outcome of collective behaviors.

It’s not the words you put on a wall. It’s not a mission statement. In fact, I could post pictures of Satya everywhere with quotes from his book and talk about growth mindset all day long. It won’t matter if the behaviors the organization tolerates are counter to those ideals. All that wisdom becomes just so much propaganda.

Finally and most importantly since I know that it’s only reasonable to expect people to remember one thing about a talk a month after hearing it: while we work in technology, we work with people. Candor, alignment, empathy, logic, and authenticity are our tools.

Sounds easy enough, doesn’t it? It never is, and it’s in moments of change, acquisitions are one but there are others, when you find out just how hard it can be. Even though we’re technologists first, we’ve got to put the time in to learn how to work with people and organization issues. That job is never done.

Thank you.
