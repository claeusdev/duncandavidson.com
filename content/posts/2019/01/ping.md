---
date: 2019-01-12T16:01:00+01:00
---

Here’s a plot from the [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?WT.mc_id=duncandavidson.com-blog-duncand) dashboard that I’ve set up to monitor my website. It contains ping test results that are run every 5 minutes from 16 data centers around the world:

![](/posts/2019/01/ping.png)

Since I’m currently using [Netlify](https://netlify.com) to serve this site, it’s is really a test of how far away servers on their content delivery network (CDN) are from Azure data centers. Some of the best times (sub 30ms) are from West US, Australia East, Brazil South, and Southeast Asia. The worst is from Japan East, grouped together in that top line.

The data from these ping tests correlate with a separate group of tests that I use [updown.io](https://updown.io/x825), another monitoring service, to run:

![](/posts/2019/01/updown.png)

Maybe Netlify’s CDN needs a presence in Japan to even things up? Even so, I can’t complain. It’s so very much better than serving this site off a single server somewhere in the world without a content delivery network.
