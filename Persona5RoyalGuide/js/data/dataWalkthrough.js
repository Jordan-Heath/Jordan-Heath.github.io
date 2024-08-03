//source: https://aqiu384.github.io/p5r-walkthrough/ace-walkthrough
const walkthroughData = {
	"April": {
		"4/9 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/10 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/11 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/12 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Villains.\" <strong>(Knowledge +2)</strong></li>\n<li><strong>Musical notes shown during stat gains are not the actual point value</strong></li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Actual Stat Gains</th>\n<th>Displayed Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3 or 4</td>\n<td>2</td>\n</tr>\n<tr>\n<td>5, 7, or 10</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>Chariot Rank 1 <strong>(Auto)</strong></li>\n</ul>\n"
		},
		"4/13 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/14 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/15 Friday": {
			"Class": "<ul>\n<li>Lovers Rank 1 <strong>(Auto)</strong></li>\n</ul>\n"
		},
		"4/16 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/17 Sunday": {
			"Evening": "<ul>\n<li>Crafting Tutorial <strong>(Proficiency +3)</strong></li>\n<li><strong>Musical notes shown during stat gains are not the actual point value</strong></li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Actual Stat Gains</th>\n<th>Displayed Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3 or 4</td>\n<td>2</td>\n</tr>\n<tr>\n<td>5, 7, or 10</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n"
		},
		"4/18 Monday": {
			"Daytime": "<ul>\n<li>Talk to librarian in Shujin library, Borrow \"Pirate Legend\"</li>\n<li>Buy DVD Player <strong>(Y2500)</strong> from Yongen-Jaya recycling shop</li>\n<li>Buy crafting materials from recycling shop</li>\n<li>Talk to Takemi in her Yongen-Jaya clinic, Death Rank 1 <strong>(Guts +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with the crossword on innermost booth of Leblanc, Complete blue squares: \"Semesters\" <strong>(Knowledge +2)</strong></li>\n<li>Clean your room <strong>(Obtain \"Yoncha Wanderer\" and \"Social Thought\")</strong></li>\n</ul>\n"
		},
		"4/19 Tuesday": {
			"Class": "<ul>\n<li>Question: \"They're the same.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Buy Bio Nutrients <strong>(Y1200)</strong> from flower shop in Shibuya underground mall</li>\n<li>Talk to Ryuji outside 2D classroom, Chariot Rank 2 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 1: \"I'm counting on you.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Do you go want to go back?\" (+2)</li>\n<li>(Phone) Choice 3: \"It's never too late, man.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with plant in your room, Feed it Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"4/20 Wednesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Train": "<p>Read \"Pirate Legend\"</p>\n",
			"Daytime": "<ul>\n<li><strong>Reach treasure in Castle Palace</strong></li>\n<li><strong>Always carry matching arcana for confidant events from here on out</strong></li>\n<li><strong>Need to obtain Hierophant, Lovers, Chariot, and Death personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with middle booth, Study at Leblanc <strong>(Knowledge +5)</strong></li>\n</ul>\n"
		},
		"4/21 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Interact with study booths in Shujin library, Study at library <strong>(Knowledge +5)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Sojiro inside Leblanc, Hierophant Rank 1</li>\n</ul>\n"
		},
		"4/22 Friday": {
			"Daytime": "<ul>\n<li>Sign up for Triple Seven convenience store job from part-time listings in Shibuya underground walkway</li>\n<li>Work at convenience store on Shibuya central street <strong>(Charm +3)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 2 <strong>(Kindness +3)</strong><ol>\n<li>Choice 1: \"Making coffee.\" (+2)</li>\n<li>Choice 2: \"That guy seemed suspicious.\" (+2)</li>\n<li>Choice 1: \"I want the ladies to love me.\" (+2)</li>\n<li>(Phone) Choice 1: \"Got it.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"4/23 Saturday": {
			"Class": "<ul>\n<li>Question: \"All of them.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Study at library <strong>(Guts +2, Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Brew coffee with matching arcana <strong>(Charm +2)</strong> <strong>(Hierophant +1)</strong></li>\n</ul>\n"
		},
		"4/24 Sunday": {
			"Daytime": "<ul>\n<li>Drink Aojiru <strong>(Y5000)</strong> for Y5,000 at Shibuya underground platform <strong>(Charm +2)</strong> <strong>(Charm Lv. 2)</strong></li>\n<li>Sign up for Rafflesia flower shop job from part-time listings in Shibuya underground walkway <strong>(Requires Charm Lv. 2)</strong></li>\n<li>Work at flower shop in Shibuya underground mall <strong>(Kindness +3)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Visit bathhouse outside Leblanc <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"4/25 Monday": {
			"Train": "<ul>\n<li>Finish reading \"Pirate Legend\" <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question with matching arcana: \"You unquestioningly support it.\" and \"You have a duty to correct it.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"The Alluring Dancer\" from library</li>\n<li>Buy rental membership <strong>(Y4800)</strong> from DVD store on Shibuya central street</li>\n<li>Borrow \"X-Folders\" from DVD store</li>\n<li>Work at flower shop <strong>(Kindness +5)</strong> <strong>(Kindness Lv. 2)</strong><ol>\n<li>Create a bouquet that satisfies the customer's request</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 3<ol>\n<li>Choice 1: \"Medium-fine.\" (+2)</li>\n<li>Choice 2: \"Is it trouble?\" (+2)</li>\n<li>(Phone) Choice 3: \"Thank you in advance.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"4/26 Tuesday": {
			"Daytime": "<ul>\n<li>Study at library <strong>(Guts +2, Knowledge +2)</strong> <strong>(Guts Lv. 2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Interact with TV in your room, Watch \"X-Folders\" <strong>(Guts +3)</strong></li>\n</ul>\n"
		},
		"4/27 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Four color theorem.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Blossom\" <strong>(Knowledge +2)</strong></li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"4/28 Thursday": {
			"Daytime": "<ul>\n<li><strong>Clear Castle Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Finish watching \"X-Folders\" <strong>(Guts +3)</strong></li>\n</ul>\n"
		},
		"4/29 Friday": {
			"Daytime": "<ul>\n<li>Borrow \"Wraith\" from DVD store</li>\n<li>Chariot Rank 3<ol>\n<li>Choice 1: \"Let's not fight.\" (+2)</li>\n<li>Choice 1: \"Calm down, Ryuji.\" (+3)</li>\n<li>(Phone) Choice 1: \"I can't exactly blame you.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"4/30 Saturday": {
			"Train": "<p>Read \"The Alluring Dancer\"</p>\n",
			"Class": "<ul>\n<li>Question: \"Wonder.\", \"Child.\", and \"A prodigy.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Watch movies in Shibuya <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong> <strong>(Proficiency Lv. 2)</strong></li>\n</ul>\n"
		}
	},
	"May": {
		"5/1 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>\n<li>Buy Bio Nutrients x3 <strong>(Y3600)</strong> from Shibuya flower shop</li>\n<li>Death Rank 2 <strong>(Requires Guts Lv. 2)</strong> <strong>(Guts +2)</strong><ol>\n<li>Choice 1: \"I have a bad heart.\" (+2)</li>\n<li>Choice 1: \"I agree.\" (+2)</li>\n<li>(Phone) Choice 1: \"I'm totally fine.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Bathhouse <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"5/2 Monday": {
			"Evening": "<ul>\n<li>Crossword: \"Golden\" <strong>(Knowledge +2)</strong></li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong> <strong>(Knowledge Lv. 2)</strong></li>\n</ul>\n"
		},
		"5/3 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"Wraith\" <strong>(Kindness +3)</strong></li>\n</ul>\n"
		},
		"5/4 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/5 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Finish watching \"Wraith\" <strong>(Kindness +3)</strong></li>\n</ul>\n"
		},
		"5/6 Friday": {
			"Class": "<ul>\n<li>Lecture <strong>(Knowledge +2)</strong></li>\n<li>Moon Rank 1 (No Persona Needed) <strong>(Auto)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>By all books including \"Buchiko's Story\" from Shibuya bookstore</li>\n<li>Borrow \"Bubbly Hills, 90210\" from DVD store</li>\n<li>Lovers Rank 2 <strong>(Requires Kindness Lv. 2)</strong><ol>\n<li>Choice 2: \"She's so strong.\" (+3)</li>\n<li>Choice 2: \"You might be right.\" (+3)</li>\n<li>Choice 2: \"I couldn't just ignore you.\" (+3)</li>\n<li>Choice 2: \"Let's find it together.\" (+3)</li>\n<li>(Phone) Choice 2: \"Leave it to me.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sign up for Ore no Beko beef bowl job from part-time listings in Shibuya underground walkway</li>\n<li>Work at beef bowl <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/7 Saturday": {
			"Class": "<ul>\n<li>Question: \"Fatal woman.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/8 Sunday": {
			"Class": "<ul>\n<li>Moon Rank 2 (No Persona Needed) <strong>(Auto)</strong><ol><li>-</li><li>Choice 2: \"You've done good, kid.\"</li><li>Choice 2: \"Sounds Cool.\"</li><li>Choice 1: \"Nice hustle, image manager.\"</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +2)</strong></li>\n<li>Work at beef bowl <strong>(Proficiency +5)</strong><ol>\n<li>Correctly memorize all orders</li><li><textarea placeholder=\"Write orders here\"></textarea></li></ol></li>\n</ul>\n"
		},
		"5/9 Monday": {
			"Daytime": "<ul>\n<li>Request \"The Bark and Bite of a Bully\" unlocked</li>\n<li>Death Rank 3 <strong>(Guts +2)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"I don't mind.\" (+2)</li>\n<li>(Phone) Choice 1: \"Of course not.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Lovers Hangout Study-5/9 <strong>(Knowledge +5)</strong><ol>\n<li>Choice 1: \"I think so.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"5/10 Tuesday": {
			"Class": "<ul>\n<li>Question: \"The Heian Period.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Lovers Rank 3 <strong>(Inokashira unlocked)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"Can we stop yet?\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Has that happened to you?\" (+3)</li>\n<li>Choice 2: \"That freedom sounds nice.\" (+2)</li>\n<li>(Phone) Choice 1: \"Could be.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Malaise\" <strong>(Knowledge +2)</strong></li>\n<li>Chariot Hangout Study-5/10 <strong>(Knowledge +5)</strong><ol>\n<li>Choice 1: \"Try starting over.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"5/11 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"Minamoto no Yoshitsune.\", \"Minamoto no Yoritomo.\", \"Yoritomo won.\", and \"The weak.\"</li>\n</ul>\n"
		},
		"5/12 Thursday": {
			"All Day": "<ul>\n<li>Exams: \"Cognition.\" and \"Both.\"</li>\n</ul>\n"
		},
		"5/13 Friday": {
			"All Day": "<ul>\n<li>Exams: \"The Devil's Dictionary.\" and \"Femme Fatale.\"</li>\n<li>Councillor Rank 1 <strong>(Auto)</strong></li>\n<li>Councillor Rank 2 <strong>(Auto)</strong> <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 2: \"We made a deal.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"But it sounds right.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Well, okay.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"5/14 Saturday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"Bubbly Hills, 90210\" <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"5/15 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/16 Monday": {
			"Class": "<ul>\n<li>Question: \"The placebo effect.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"5/17 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/18 Wednesday": {
			"Daytime": "<ul>\n<li>Death Rank 4 <strong>(Guts +2)</strong><ol>\n<li>Choice 2: \"Dr. Takemi will help.\" (+2)</li>\n<li>Choice 1: \"You seem happy.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'll reflect on my mistakes.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Gallery\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Yoshida outside Shibuya station, Sunday Rank 0.1</li>\n</ul>\n"
		},
		"5/19 Thursday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Hokusai Katsushika.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Visit diner on Shibuya central street, Order Surprise Sando at diner <strong>(Knowledge +3, Guts +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Interact with downstairs TV in Leblanc, TV Quiz: \"Using noise to cause distress.\" <strong>(Knowledge +2)</strong></li>\n<li>Bathhouse <strong>(Charm +3, Guts +2)</strong></li>\n</ul>\n"
		},
		"5/20 Friday": {
			"Daytime": "<ul>\n<li>Exam results <strong>(Charm +3)</strong></li>\n<li>Talk to Justine in Velvet Room, Strength Rank 1</li>\n<li><strong>Strength confidant can be continued anytime before 12/24</strong></li>\n<li><strong>Reach barrier in Museum Palace</strong></li>\n<li><strong>Need free slot in stock to unlock \"The Purpose of a Thief\" when recruiting Regent during scripted encounter</strong> </li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/21 Saturday": {
			"Train": "<ul>\n<li>Finish reading \"The Alluring Dancer\" <strong>(Charm +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"1:1.414\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Unlock barrier in Museum Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Finish watching \"Bubbly Hills, 90210\" <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"5/22 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +2)</strong></li>\n<li>Chariot Rank 4<ol>\n<li>Choice 2: \"Are you worried about him?\" (+2)</li>\n<li>Choice 1: \"But you're doing great.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Bathhouse <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"5/23 Monday": {
			"Class": "<ul>\n<li>Question: \"Together.\", \"Senses.\", and \"Senses coming together.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Reach treasure in Museum Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/24 Tuesday": {
			"Train": "<p>Read \"Buchiko's Story\"</p>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/25 Wednesday": {
			"Daytime": "<ul>\n<li><strong>Clear Museum Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong> <strong>(Proficiency Lv. 3)</strong></li>\n</ul>\n"
		},
		"5/26 Thursday": {
			"Class": "<ul>\n<li>Question: \"Arthur Conan Doyle.\" <strong>(Knowledge +2)</strong> <strong>(Knowledge Lv. 3)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"The Gallant Rogue\" from library</li>\n<li>Request \"If Cats Disappeared from the City\" flag</li>\n<li>Investigate Yongen-Jaya by talking with residents to ID target <strong>(Request \"The Cat's Disappearance\" unlocked)</strong></li>\n<li>Chariot Rank 5<ol>\n<li>Choice 2: \"Protein powder?\" (+3)</li>\n<li>Choice 1: \"You seem conflicted.\" (+2)</li>\n<li>Choice 2: \"So he's an asshole?\" (+3)</li>\n<li>(Phone) Choice 1: \"Don't worry. I gotcha.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Pollenosis\" <strong>(Knowledge +2)</strong></li>\n<li>TV Quiz: \"Queen of evidence.\" <strong>(Knowledge +2)</strong></li>\n<li>Sun Rank 1 (No Persona Needed)</li>\n</ul>\n"
		},
		"5/27 Friday": {
			"Daytime": "<ul>\n<li>Death Rank 5 <strong>(Guts +2)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"That's good.\" (+3)</li>\n<li>(Phone) Choice 1: \"About Miwa-chan?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Mishima on Shibuya central street to start Operation Maidwatch, Temperance Rank 0.1<ol>\n<li>Choice 3: \"You're a genius, Ryuji!\" (Chariot +3)</li></ol></li>\n</ul>\n"
		},
		"5/28 Saturday": {
			"Daytime": "<ul>\n<li>Talk to Kawakami in Shujin hallways and help her out</li>\n<li>Lovers Rank 4<ol>\n<li>Choice 1: \"I know what you mean.\" (+3)</li>\n<li>Choice 2: \"That's hilarious.\" (+3)</li>\n<li>Choice 1: \"Tell me.\" (+3)</li>\n<li>Choice 1: \"Good idea.\" (+3)</li>\n<li>Choice 3: \"Good luck with that.\" (+3)</li>\n<li>(Phone) Choice 1: \"I train everyday.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Visit Big Bang Burger on Shibuya central street, Big Bang Challenge <strong>(Charm +2, Proficiency +2, Guts +2, Knowledge +2)</strong> <strong>(Guts Lv. 3)</strong></li>\n</ul>\n"
		},
		"5/29 Sunday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Harajuku<ol>\n<li>-</li>\n<li>Choice 3: \"Kinda want to try it.\" (+3) (Lovers +3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>\n<li>Chariot Hangout Movies <strong>(Kindness +5)</strong><ol>\n<li>Choice 1: \"They do.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"5/30 Monday": {
			"Class": "<ul>\n<li>Faith Rank 1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Interact with payphone in Leblanc, Temperance Rank 1 <strong>(Y5000)</strong> <strong>(Requires Guts Lv. 3)</strong></li>\n</ul>\n"
		},
		"5/31 Tuesday": {
			"Class": "<ul>\n<li>Question: \"John Silver.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Mementos Palace</strong><ol>\n<li>The Bark and Bite of a Bully</li>\n<li>If Cats Disappeared from the City</li></ol></li>\n<li><strong>Need to obtain Emperor, Justice, Temperance, and Councillor personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Japanese\" <strong>(Knowledge +2)</strong></li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		}
	},
	"June": {
		"6/1 Wednesday": {
			"Daytime": "<ul>\n<li>Chariot Rank 6<ol>\n<li>Choice 3: \"We can train at my place.\" (+3)</li>\n<li>Choice 1: \"You guys should trust Nakaoka.\" (+3)</li>\n<li>Choice 1: \"Absolutely.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"So he should've punched back?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Mishima on Shibuya central street, Moon Rank 3 (No Persona Needed)</li>\n</ul>\n"
		},
		"6/2 Thursday": {
			"Daytime": "<ul>\n<li>Request \"One Who Bullies Bullies\" flag</li>\n<li>Investigate Shujin gates <strong>(Request \"One Who Bullies Bullies\" unlocked)</strong></li>\n<li>Death Rank 6 <strong>(Guts +2)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"It suits you.\" (+3)</li>\n<li>(Phone) Choice 1: \"You can count on me.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Probation officers are unpaid.\" <strong>(Knowledge +2)</strong></li>\n<li>Big Bang Challenge <strong>(Charm +3, Proficiency +3, Guts +3, Knowledge +3)</strong></li>\n</ul>\n"
		},
		"6/3 Friday": {
			"Train": "<ul>\n<li>Finish reading \"Buchiko's Story\" <strong>(Kindness +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Read \"The Gallant Rogue\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Councillor Rank 3<ol>\n<li>Choice 1: \"So they have, huh?\" (+2)</li>\n<li>Choice 1: \"Of course.\" (+2)</li>\n<li>-</li>\n<li>Choice 3: \"It's a seed for new love.\" (+2)</li>\n<li>Choice 1: \"Did that help?\" (+2)</li>\n<li>(Phone) Choice 1: \"Good work over there.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Master\" <strong>(Knowledge +2)</strong></li>\n<li>Temperance Rank 2 <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"It does.\" (+2)</li>\n<li>Choice 2: \"Absolutely not!\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"Uh, what the hell?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/4 Saturday": {
			"Class": "<ul>\n<li>Question: \"The halo effect.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Order Surprise Sando at diner <strong>(Knowledge +3, Guts +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Rank 3 <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"Yeah, they do.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"I'll request you more often.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Thanks.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/5 Sunday": {
			"Daytime": "<ul>\n<li>Visit Kichijoji info stand, Ask the receptionist every question <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Request \"An Elderly's Meaning of Life\" flag</li>\n<li>Investigate Kichijoji <strong>(Request \"An Elderly's Meaning of Life\" unlocked)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Charm +2)</strong></li>\n<li>Sun Rank 2 (No Persona Needed) <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"6/6 Monday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Request \"Sadism Is Just a Sign of Love\" unlocked</li>\n<li>Buy Imported Protein from sports shop in Shibuya underground mall</li>\n<li>Councillor Rank 4<ol>\n<li>-</li>\n<li>Choice 1: \"I know, right?\" (+3)</li>\n<li>Choice 3: \"Is that what you're researching?\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"That's a grand plan.\" (+2)</li>\n<li>Choice 1: \"That sounds fun.\" (+3)</li>\n<li>(Phone) Choice 1: \"I feel completely fine.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Talk to Justine outside Velvet Room, Strength Hangout Big Bang Burger</li>\n</ul>\n"
		},
		"6/7 Tuesday": {
			"Class": "<ul>\n<li>Question: \"The number of legs.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Work at convenience store <strong>(Charm +5)</strong> <strong>(Charm Lv. 3)</strong><ol>\n<li>Handle the queue efficiently</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Conference\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Movie Theater</li>\n</ul>\n"
		},
		"6/8 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Controlling public thought.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Respond to Kasumi's message, Faith Rank 2 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 1: \"We're just getting started.\" (+2)</li>\n<li>Choice 1: \"Next time, then.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Impressive.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Moon Rank 4 (No Persona Needed)</li>\n</ul>\n"
		},
		"6/9 Thursday": {
			"Evening": "<ul>\n<li>Play billiards in Kichijoji <strong>(Random Stat +3)</strong></li>\n</ul>\n"
		},
		"6/10 Friday": {
			"Class": "<ul>\n<li>Justice Rank 1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Hangout</li>\n</ul>\n"
		},
		"6/11 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"6/12 Sunday": {
			"Daytime": "<ul>\n<li>Request \"Part-time Job, Full-time Hell\" unlocked</li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>\n<li>Buy \"Expert Billiards\" and Jump Cue <strong>(Y51500)</strong> from sports shop</li>\n<li>Lovers Rank 5<ol>\n<li>Choice 2: \"Give it up.\" (+2)</li>\n<li>Choice 2: \"She's amazing, huh\u2026\" (+2)</li>\n<li>Choice 1: \"It had grace.\" (+2)</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to masked man in Kichijoji's back alleys, Trade Imported Protein for Decorative Whip</li>\n<li>Sun Rank 3 (No Persona Needed)</li>\n</ul>\n"
		},
		"6/13 Monday": {
			"Class": "<ul>\n<li>Question: \"Green.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Talk to Akechi outside the Kichijoji darts club, Justice Rank 2<ol>\n<li>Choice 1: \"You always seem so busy.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Shoot very carefully.\" (+2)</li>\n<li>-</li>\n<li>Choice 3: \"I see a lot of things.\" (+3)</li>\n<li>(Phone) Choice 3: \"As rivals?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/14 Tuesday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Bathhouse <strong>(Charm +3, Guts +2)</strong></li>\n</ul>\n"
		},
		"6/15 Wednesday": {
			"Train": "<ul>\n<li>Finish reading \"Expert Billiards\" <strong>(Technical Lv. 1)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Coins.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Temperance Rank 4 <strong>(Y5000)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"How rude.\" (+2)</li>\n<li>Choice 3: \"You need to love yourself.\" (+3)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"6/16 Thursday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Crossword: \"Wardrobe\" <strong>(Knowledge +2)</strong></li>\n<li>Billiards <strong>(Random Stat +3)</strong> <strong>(Technical Lv. 2)</strong></li>\n</ul>\n"
		},
		"6/17 Friday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Temperance Rank 5 <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"It's fun.\" (+2)</li>\n<li>Choice 1: \"How terrible\u2026\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"You want some?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/18 Saturday": {
			"Daytime": "<ul>\n<li>Request \"Phantom Thieves VS Burglary Ring\" unlocked</li>\n<li>Talk to Yusuke in Shibuya underground walkway, Emperor Rank 1</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong> <strong>(Knowledge Lv. 4)</strong></li>\n</ul>\n"
		},
		"6/19 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"6/20 Monday": {
			"Class": "<ul>\n<li>Question with matching arcana: \"Smartphone.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"6/21 Tuesday": {
			"Daytime": "<ul>\n<li>Councillor Rank 5<ol>\n<li>Choice 1: \"This looks great!\" (+3)</li>\n<li>-</li>\n<li>Choice 3: \"You know, you're right.\" (+3)</li>\n<li>Choice 2: \"Hey, as long as it tastes good.\" (+2)</li>\n<li>Choice 2: \"I guess so.\" (+2)</li>\n<li>(Phone) Choice 1: \"I really don't mind.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Borrow \"ICU\" from DVD store</li>\n<li>Buy \"The Craft of Cinema\" and \"ABCs of Crafting\" from Shinjuku bookstore</li>\n<li>Buy \"Mega Fertilizer\" x6 <strong>(Y18000)</strong> from Shinuku flower shop</li>\n<li>Billiards <strong>(Random Stat +3)</strong> <strong>(Technical Lv. 3)</strong> <strong>(Obtain \"Billiards Magician\")</strong></li>\n</ul>\n"
		},
		"6/22 Wednesday": {
			"Daytime": "<ul>\n<li>Lovers Hangout Harajuku<ol>\n<li>Choice 1: \"Yeah.\" (+3)</li>\n<li>Receive Idol Poster</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Currency\" <strong>(Knowledge +2)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +5)</strong></li>\n<li>Chariot Rank 7 <strong>(Unlocks Tsukishima)</strong><ol>\n<li>Choice 2: \"Let's talk to Takeishi.\" (+3)</li>\n<li>Choice 1: \"I think it's cool, Ryuji.\" (+3)</li>\n<li>(Phone) Choice 1: \"Never know until you try.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/23 Thursday": {
			"Train": "<ul>\n<li>Finish reading \"The Craft of Cinema\" <strong>(Boosts points from watching movies and DVDs)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"A pope.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Rank 2<ol>\n<li>Choice 2: \"It's enigmatic.\" (+2)</li>\n<li>Choice 1: \"I can't wait.\" (+3)</li>\n<li>(Phone) Choice 1: \"You're already doing enough.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Ordering food without money.\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Ohya at Bar Crossroads in Shinjuku, Devil Rank 1 <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"6/24 Friday": {
			"Daytime": "<ul>\n<li>Buy Yakisoba Pan from school store</li>\n<li>Lovers Rank 6<ol>\n<li>Choice 1: \"It seems that way.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"Show her your own strength.\" (+3)</li>\n<li>(Phone) Choice 2: \"I'll cheer you on.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Temperance Rank 6 <strong>(Y5000)</strong><ol>\n<li>Choice 2: \"Want to rest a bit?\" (+2)</li>\n<li>Choice 1: \"Are you all right?\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"How are you feeling, though?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/25 Saturday": {
			"Class": "<ul>\n<li>Finish reading \"ABCs of Crafting\" <strong>(Doubles the number of items that can be crafted)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Death Rank 7 <strong>(Guts +2)</strong><ol>\n<li>Choice 2: \"She's a great doctor.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Just rest for today.\" (+2)</li>\n<li>Choice 3: <strong>\"I'm glad you did.\"</strong> (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Hangout</li>\n</ul>\n"
		},
		"6/26 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +2)</strong></li>\n<li><strong>Reach treasure in Bank Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"6/27 Monday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Dogs.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"6/28 Tuesday": {
			"Daytime": "<ul>\n<li><strong>Clear Bank Palace</strong></li>\n<li><strong>Need Y100,000 for Fortune Rnk 0.2</strong></li>\n<li><strong>Need to obtain Priestess and Faith personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Watch \"ICU\" <strong>(Kindness +5)</strong> <strong>(Kindness Lv. 3)</strong></li>\n</ul>\n"
		},
		"6/29 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Gold.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 3<ol>\n<li>Choice 1: \"Making bento?\" (+3)</li>\n<li>Choice 2: \"It looks delicious.\" (+2)</li>\n<li>Choice 1: \"Is that all for you?\" (+3)</li>\n<li>Choice 2: \"It's definitely unique.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"You could try again sometime?\" (+3)</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Yakisoba Pan for Black Robe</li>\n<li>Temperance Rank 7 <strong>(Y5000)</strong><ol>\n<li>Choice 3: \"Don't pay them.\" (+3)</li>\n<li>Choice 3: <strong>\"Think this through more.\"</strong> (+3)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"6/30 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Rank 3 <strong>(Ueno unlocked)</strong><ol>\n<li>Choice 3: \"Don't let it bother you.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"This isn't like you.\" (+3)</li>\n<li>Choice 2: \"That's the spirit.\" (+2)</li>\n<li>(Phone) Choice 1: \"That's the spirit.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Front\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Chihaya at Shinjuku fortune telling booth, Fortune Rank 0.1</li>\n</ul>\n"
		}
	},
	"July": {
		"7/1 Friday": {
			"Train": "<ul>\n<li>Finish reading \"The Gallant Rogue\" <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Barbarian's head.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"Speed Reader\" from library</li>\n<li>Buy all books including \"Ghost Encounters\" and \"Tidying the Heart\" from Shibuya bookstore</li>\n<li>Buy Summer Lotto S <strong>(sequential)</strong> lottery ticket <strong>(Y5000)</strong> from Shibuya <strong>(Does not unlock \"Easy Mondayey\", only weekly or daily prizes do)</strong></li>\n<li>Talk to Makoto outside Shujin student council room, Priestess Rank 1 <strong>(Requires Knowledge Lv. 3)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Rank 8 <strong>(Y5000)</strong><ol>\n<li>Choice 3: \"Is this really what you want?\" (+3)</li>\n<li>Choice 2: \"If that's what you decided.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"That's the right choice.\" (+3)</li>\n<li>Choice 2: \"That's reassuring.\" (+3)</li>\n<li>(Phone) Choice 3: \"I'll do anything for you.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/2 Saturday": {
			"Class": "<ul>\n<li>Finish reading \"Speed Reader\" <strong>(Read books 2 chapters at a time)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"Zorro, the Outlaw\" from library</li>\n<li>Temperance Rank 8.1 <strong>(Auto)</strong> <strong>(Request \"A Teacher Maid to Suffer\" unlocked)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n<li>Emperor Rank 4<ol>\n<li>Choice 3: \"I should bring a girl here.\" (+2)</li>\n<li>Choice 1: \"Love comes in all forms.\" (+3)</li>\n<li>(Phone) Choice 1: \"Don't get discouraged.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 0.2 <strong>(Y100000)</strong></li>\n<li>Accept Chariot Invitation</li>\n</ul>\n"
		},
		"7/3 Sunday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Ichigaya <strong>(Ichigaya unlocked)</strong><ol>\n<li>Choice 1: \"This is shady.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"She's the true master fisher.\" (+3) (Temperance +3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +2)</strong></li>\n<li>Sun Rank 4 (No Persona Needed) <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"7/4 Monday": {
			"Train": "<ul>\n<li>Finish reading \"Ghost Encounters\" <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Julius and Augustus.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Rank 5<ol>\n<li>Choice 3: \"Do you want me to strip?\" (+3)</li>\n<li>Choice 1: \"I'm sure you will.\" (+3)</li>\n<li>(Phone) Choice 3: \"There's still hope.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 0.3 <strong>(Request \"Ending the Boyfriend's Abuse\" unlocked)</strong></li>\n</ul>\n"
		},
		"7/5 Tuesday": {
			"Daytime": "<ul>\n<li>Priestess Rank 2<ol>\n<li>Choice 1: \"You're very well informed.\" (+2)</li>\n<li>Choice 2: \"That was dangerous.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Couldn't agree more.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Strength Hangout Gym</li>\n</ul>\n"
		},
		"7/6 Wednesday": {
			"Class": "<ul>\n<li>Finish reading \"Zorro, the Outlaw\" <strong>(Kindness +5)</strong></li>\n</ul>\n",
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Mementos Palace</strong><ol>\n<li>An Elderly's Meaning of Life</li>\n<li>One Who Bullies Bullies</li>\n<li>Sadism Is Just a Sign of Love</li>\n<li>Part-time Job, Full-time Hell</li>\n<li>Ending the Boyfriend's Abuse</li>\n<li>Phantom Thieves VS Burglary Ring</li>\n<li>A Teacher Maid to Suffer</li></ol></li>\n<li><strong>Need to obtain Fortune and Star personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +5)</strong></li>\n</ul>\n"
		},
		"7/7 Thursday": {
			"Class": "<ul>\n<li>Question with matching arcana: \"The Milky Way.\" and \"Soumen noodles.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"The Illusory Popess\" from library</li>\n<li>Faith Rank 4<ol>\n<li>Choice 2: \"You're looking to buy?\" (+2)</li>\n<li>Choice 1: \"A pretty modern look.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Of course.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Good choice.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Everyone deals with that.\" (+2)</li>\n<li>Choice 2: \"We'll work at it together.\" (+2)</li>\n<li>(Phone) Choice 1: \"I'm glad to hear that.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Narcotics\" <strong>(Knowledge +2)</strong></li>\n<li>Fortune Rank 1</li>\n</ul>\n"
		},
		"7/8 Friday": {
			"Train": "<ul>\n<li>Finish reading \"Tidying the Heart\" <strong>(Proficiency +5)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Buy Soothing Soba from Shibuya convenience store</li>\n<li>Lovers Rank 7 <strong>(Asakusa and Oshiage unlocked)</strong><ol>\n<li>Choice 2: \"She admires you.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Go get 'em, tiger.\" (+2)</li>\n<li>(Phone) Choice 1: \"You got this.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Ask Chihaya for Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong></li>\n<li><strong>Temperance must be completed on the romance route to receive Night Pennant room decoration</strong></li>\n<li>Temperance Rank 9 Friendship <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"Nonsense.\" (+3)</li>\n<li>Choice 1: \"What a bummer.\" (+3)</li>\n<li>Choice 2: \"I want to keep seeing you.\" (+2)</li>\n<li>Choice 2: \"Got it .\" (+2)</li>\n<li>(Phone) Choice 2: \"You can do it.\" (+2)</li></ol></li>\n<li>Temperance Rank 9 Romance <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"Nonsense.\" (+3)</li>\n<li>Choice 1: \"What a bummer.\" (+3)</li>\n<li>Choice 2: \"I want to keep seeing you.\" (+2)</li>\n<li>Choice 2: \"I mean what I say.\" (+0)</li>\n<li>Choice 2: \"I'm a man; you're a woman.\" (+0)</li></ol></li>\n</ul>\n"
		},
		"7/9 Saturday": {
			"Class": "<ul>\n<li>Question: \"A triangle.\" <strong>(Knowledge +2)</strong></li>\n<li>Temperance Rank 9.1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Hifumi in Kanda church, Star Rank 1 <strong>(Requires Charm Lv. 3)</strong> <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"7/10 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Request \"The Lovesick Cyberstalking Girl\" unlocked</li>\n<li>Finish watching \"ICU\" <strong>(Kindness +5)</strong></li>\n</ul>\n"
		},
		"7/11 Monday": {
			"Class": "<ul>\n<li>Question: \"Memories that last a long time.\", \"Infinite.\", and \"Forever.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Soothing Soba for Koedo Sword</li>\n<li>Star Rank 2 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 1: \"That's interesting.\" (+2)</li>\n<li>-</li>\n<li>Choice 3: \"But you don't want to, right?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/12 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Thievery.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Chariot Rank 8<ol>\n<li>-</li>\n<li>Choice 1: \"Things turned out for the best.\" (+3)</li>\n<li>Choice 1: \"All I did was watch.\" (+3)</li>\n<li>Choice 2: \"You weren't cool though.\" (+3)</li>\n<li>(Phone) Choice 2: \"So, case closed?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Vacation\" <strong>(Knowledge +2)</strong></li>\n<li>Justice Rank 3 <strong>(Requires Charm Lv. 3 and Knowledge Lv. 3)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"Should've figured.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"Wasn't it fun?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/13 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"64 degrees.\", \"Zhuge Liang.\", \"Barbarians' heads.\", and \"To offer them instead of heads.\"</li>\n</ul>\n"
		},
		"7/14 Thursday": {
			"All Day": "<ul>\n<li>Exams: \"Red King Crab, <strong>(Paralithodes)</strong>.\" and \"It caused confusion in the economy.\"</li>\n</ul>\n"
		},
		"7/15 Friday": {
			"All Day": "<ul>\n<li>Exams: \"Raining cats and dogs.\" and \"Demon Guts.\"</li>\n</ul>\n"
		},
		"7/16 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"7/17 Sunday": {
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>\n<li>Borrow \"The Running Dead\" from DVD shop</li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Lovers Hangout Movies <strong>(Charm +10)</strong><ol>\n<li>Choice 2: \"Understandable.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"7/18 Monday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"7/19 Tuesday": {
			"Daytime": "<ul>\n<li>Exam results <strong>(Charm +5)</strong></li>\n<li>Priestess Rank 3<ol>\n<li>Choice 1: \"You have the wrong idea.\" (+2)</li>\n<li>Choice 2: \"You can change.\" (+3)</li>\n<li>(Phone) Choice 1: \"Sounds like you two get along.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Finals\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Sojiro for exam reward</li>\n<li>Fortune Rank 2 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 3: \"Encourage her.\" (+0)</li>\n<li>Choice 2: \"Overturn your fate!\" (+0)</li>\n<li>Choice 2: \"Open your mind to change.\" (+2)</li>\n<li>(Phone) Choice 1: \"Of course I am.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/20 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"The Running Dead\" <strong>(Guts +5)</strong></li>\n</ul>\n"
		},
		"7/21 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong> <strong>(Proficiency Lv. 4)</strong></li>\n</ul>\n"
		},
		"7/22 Friday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Finish watching \"The Running Dead\" <strong>(Guts +5)</strong> <strong>(Guts Lv. 4)</strong></li>\n</ul>\n"
		},
		"7/23 Saturday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"7/24 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"7/25 Monday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with Leblanc bathroom, Clean Leblanc with matching arcana <strong>(Kindness +2)</strong> <strong>(Hierophant +1)</strong></li>\n</ul>\n"
		},
		"7/26 Tuesday": {
			"Daytime": "<ul>\n<li>Buy Retro Game Set <strong>(Y5000)</strong> from recycling shop</li>\n<li>Priestess Rank 4<ol>\n<li>Choice 1: \"That's unlike you.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"Why do you use it?\" (+3)</li>\n<li>Choice 3: \"It's an amazing goal.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong></li>\n<li>Reload for MRE Ration from airsoft shop vending machine</li>\n<li>Trade MRE Ration for \"Factorization Guide\"</li>\n<li>Fortune Rank 3 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 2: \"Follow his heart.\" (+0)</li>\n<li>Choice 1: \"Thieves may steal her away.\" (+0)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"7/27 Wednesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Emperor Hangout Leblanc-7/27 <strong>(Charm +5)</strong><ol>\n<li>Choice 3: \"A bit of everything!\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Fireworks\" <strong>(Knowledge +2)</strong></li>\n<li>Temperance Rank 10 <strong>(Y5000)</strong></li>\n</ul>\n"
		},
		"7/28 Thursday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Leblanc-7/28 <strong>(Guts +5)</strong><ol>\n<li>Choice 2: \"Definitely the rival.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Priestess Hangout Movies <strong>(Guts +10)</strong><ol>\n<li>Choice 1: \"Not at all.\" (+3)</li></ol></li>\n<li>Accept Justice Invitation</li>\n</ul>\n"
		},
		"7/29 Friday": {
			"Daytime": "<ul>\n<li>Justice Hangout Shinagawa <strong>(Shinagawa unlocked)</strong><ol>\n<li>Choice 1: \"It's a nice place.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"If you like.\" (Devil +2)</li>\n<li>Choice 2: \"It's nothing bad.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Talk to Iwai in Shibuya airsoft shop, Hanged Rank 1 <strong>(Requires Guts Lv. 4)</strong></li>\n</ul>\n"
		},
		"7/30 Saturday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Keep sitting on sofa in front furniture store in east Kichijoji <strong>(Guts +3)</strong></li>\n<li>Lovers Rank 8<ol>\n<li>Choice 2: \"You have some real guts.\" (+3)</li>\n<li>Choice 1: \"There's no doubt in my mind.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I'm sure she already knows.\" (+3)</li>\n<li>(Phone) Choice 3: \"You can ask her yourself.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Visit the donut shop across from the Kichijoji power stone shop, Answer Morgana's quiz <strong>(Guts +3)</strong></li>\n<li>Fortune Hangout</li>\n</ul>\n"
		},
		"7/31 Sunday": {
			"Daytime": "<ul>\n<li>Ask Chihaya for Mondayey Reading <strong>(Y5000)</strong></li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Charm +3)</strong> <strong>(Charm Lv. 4)</strong></li>\n<li><strong>Reach treasure in Pyramid Palace</strong></li>\n<li><strong>Need to obtain Hermit, Hanged, and Devil personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Fortune Rank 4<ol>\n<li>-</li>\n<li>Choice 3: \"Trust in yourself.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"I didn't do much.\" (+2)</li></ol></li>\n</ul>\n"
		}
	},
	"August": {
		"8/1 Monday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Hangout Leblanc-8/1 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"Just go to the library.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 3 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 1: \"Describes you perfectly.\" (+2)</li>\n<li>Choice 2: \"Having a difficult time?\" (+2)</li>\n<li>(Phone) Choice 1: \"Bring it on.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/2 Tuesday": {
			"Daytime": "<ul>\n<li><strong>Clear Pyramid Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Fortune Rank 5<ol>\n<li>Choice 1: \"You're such a hard worker.\" (+3)</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"8/3 Wednesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Request \"We Aren't Just Your Slaves\" flag</li>\n<li>Priestess Rank 5<ol>\n<li>Choice 3: \"He sounds suspicious.\" (+3)</li>\n<li>Choice 1: \"I got this.\" (+3)</li>\n<li>(Phone) Choice 3: \"Try to reach out to her.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Island\" <strong>(Knowledge +2)</strong></li>\n<li>Hanged Rank 2 <strong>(Proficiency +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"How's your cold?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/4 Thursday": {
			"Daytime": "<ul>\n<li>Request \"Who's Been Assaulting People?\" flag</li>\n<li>Emperor Hangout Leblanc-8/4 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"Let's go.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Joyride, but return the car.\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Church</li>\n</ul>\n"
		},
		"8/5 Friday": {
			"Daytime": "<ul>\n<li>Request \"Calling for Justice for Cats\" flag</li>\n<li>Chariot Rank 9<ol>\n<li>Choice 1: \"Are you satisfied now?\" (+3)</li>\n<li>Choice 3: \"Don't do it.\" (+3)</li>\n<li>Choice 2: \"I never realized that.\" (+3)</li>\n<li>Choice 1: \"I agree.\" (+2)</li>\n<li>(Phone) Choice 1: \"Congratulations.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Emperor Hangout Movies <strong>(Kindness +10)</strong><ol>\n<li>Choice 1: \"I don't mind.\" (+3)</li></ol></li>\n<li>Accept Lovers Invitation</li>\n</ul>\n"
		},
		"8/6 Saturday": {
			"Daytime": "<ul>\n<li>Lovers Hangout Meiji-Shrine<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"As expected of a doctor.\" (+3) (Death +2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 4 <strong>(Jinobocho unlocked)</strong><ol>\n<li>Choice 3: \"Must've been the katsu curry.\" (+2)</li>\n<li>Choice 2: \"They're cool.\" (+2)</li>\n<li>(Phone) Choice 1: \"I'd love to.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/7 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>\n<li>Borrow \"31\" from DVD store</li>\n<li>Buy \"Master Swordsman\" from Jinbocho</li>\n<li>Buy Exorcism Water from church</li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Work at convenience store <strong>(Charm +7)</strong> <strong>(Request \"Calling for Justice for Cats\" unlocked)</strong><ol>\n<li>Handle the queue efficiently</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Exorcism Water for Model Gun</li>\n<li>Sun Rank 5 (No Persona Needed) <strong>(Charm +4)</strong></li>\n</ul>\n"
		},
		"8/8 Monday": {
			"Daytime": "<ul>\n<li>Emperor Hangout Leblanc-8/8 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"If I can find a good deal.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Crossword: \"Courage\" <strong>(Knowledge +2)</strong></li>\n<li>Star Rank 5 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 2: \"She's scary.\" (+2)</li>\n<li>Choice 2: \"You should stop then.\" (+2)</li>\n<li>(Phone) Choice 2: \"You've got a lot to deal with\u2026\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/9 Tuesday": {
			"Daytime": "<ul>\n<li>Emperor Rank 6 <strong>(Requires Proficiency Lv. 4)</strong><ol>\n<li>Choice 1: \"It feels nostalgic.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"I couldn't possibly tell you.\" (+3)</li>\n<li>(Phone) Choice 1: \"He had a certain dignity.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 4<ol>\n<li>-</li>\n<li>Choice 3: \"Now this is my kind of club.\" (+3)</li>\n<li>Choice 1: \"Any recommendations?\" (+3)</li>\n<li>Choice 1: \"It's a great place.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"I can use a microwave.\" (+3)</li>\n<li>(Phone) Choice 2: \"I kinda get it.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/10 Wednesday": {
			"Daytime": "<ul>\n<li>Faith Rank 5<ol>\n<li>Choice 1: \"It's a surprise, yeah.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"Go ahead. I'll watch.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I saw!\" (+3)</li>\n<li>Choice 1: \"That's important.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Gymnastics.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Strength Hangout Aquarium</li>\n</ul>\n"
		},
		"8/11 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Hangout Leblanc-8/11 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"There's no way.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Ask Chihaya for Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hierophant +2)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong> <strong>(Kindness Lv. 4)</strong></li>\n<li>Sun Rank 6</li>\n</ul>\n"
		},
		"8/12 Friday": {
			"Daytime": "<ul>\n<li>Emperor Rank 7<ol>\n<li>-</li>\n<li>Choice 2: \"What do you mean?\" (+2)</li>\n<li>Choice 1: \"The truth is within you.\" (+3)</li>\n<li>(Phone) Choice 1: \"Calm down.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hierophant +2)</strong></li>\n<li>Devil Rank 2 <strong>(Charm +4)</strong><ol>\n<li>Choice 3: \"Mishima might\u2026\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"It's for the article.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/13 Saturday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Leblanc-8/13 <strong>(Guts +5)</strong><ol>\n<li>Win or lose (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 5<ol>\n<li>-</li>\n<li>Choice 1: \"Are you used to gunplay?\" (+2)</li>\n<li>Choice 1: \"You wanted to be a hero?\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"You did fine.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/14 Sunday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +3)</strong></li>\n<li>Lovers Rank 9 Friendship<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I believe in you, Ann.\" (+3)</li>\n<li>Choice 2: \"You have the others.\" (+0)</li></ol></li>\n<li>Lovers Rank 9 Romance<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I believe in you, Ann.\" (+3)</li>\n<li>Choice 1: \"You have me.\" (+0)</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"I'm yours forever.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 7 (No Persona Needed) <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"8/15 Monday": {
			"Daytime": "<ul>\n<li><strong>[Optional]</strong> Priestess Hangout Jinbocho<ol>\n<li>Choice 1: \"Let's get cracking.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Wow, this is useful information.\" (+3) (Star +2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Devil Rank 3 <strong>(Charm +4)</strong> <strong>(Charm Lv. 5)</strong><ol>\n<li>Choice 3: \"You shouldn't make assumptions.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"She was falsely accused?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/16 Tuesday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Priestess Rank 6 <strong>(Requires Charm Lv. 5)</strong><ol>\n<li>Choice 3: \"Love comes in many forms.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Tell him you're on a date.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 6<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: <strong>\"You're just Chihaya to me.\"</strong> (+3)</li>\n<li>(Phone) Choice 2: \"Be honest with yourself.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/17 Wednesday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Fortune +2)</strong></li>\n<li>Work at flower shop <strong>(Kindness +7)</strong> <strong>(Request \"Who's Been Assaulting People?\" unlocked)</strong><ol>\n<li>Create a bouquet that satisfies the customer's request</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Crossword: \"Sunburn\" <strong>(Knowledge +2)</strong></li>\n<li>Moon Rank 5 (No Persona Needed)</li>\n</ul>\n"
		},
		"8/18 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Priestess Rank 7<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"He was a noble man.\" (+3)</li>\n<li>Choice 2: \"I'm sure he was happy.\" (+3)</li>\n<li>Choice 2: \"You can figure that out now.\" (+2)</li>\n<li>Choice 1: \"I'm game if you are.\" (+2)</li>\n<li>(Phone) Choice 1: \"Of course.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Lovers +2)</strong></li>\n<li>Strength Hangout Sky Tree</li>\n</ul>\n"
		},
		"8/19 Friday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Lovers +2)</strong></li>\n<li>Lovers Rank 10 <strong>(Odaiba unlocked)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Big Bang Challenge <strong>(Guts +7, Knowledge +5, Charm +5, Proficiency +5)</strong></li>\n</ul>\n"
		},
		"8/20 Saturday": {
			"Daytime": "<ul>\n<li>Buy Melon Pan from Ginza Line gate near Shibuya hideout</li>\n<li>Chariot Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Proficiency)</strong></li>\n<li>Hanged Rank 3 <strong>(Proficiency +4)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"I always knew you were a thug.\" (+3)</li>\n<li>Choice 3: \"We made a deal, didn't we?\" (+3)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"8/21 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"31\" <strong>(Guts +5)</strong></li>\n</ul>\n"
		},
		"8/22 Monday": {
			"Evening": "<ul>\n<li>Trade Melon Pan for Old Man's Fist</li>\n<li>Check Summer Lotto S <strong>(sequential)</strong> lottery results <strong>(Does not unlock \"Easy Mondayey\", only weekly or daily prizes do)</strong></li>\n<li>Star Rank 6 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 2: \"Is that frustrating?\" (+2)</li>\n<li>Choice 3: \"Do what you love.\" (+2)</li>\n<li>(Phone) Choice 2: \"You're imagining things.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/23 Tuesday": {
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Proficiency)</strong></li>\n<li>Hanged Rank 4 <strong>(Proficiency +4)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"Where's my reward?\" (+3)</li>\n<li>(Phone) Choice 1: \"I agree.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/24 Wednesday": {
			"Evening": "<ul>\n<li>Star Hangout Inokashira<ol>\n<li>Choice 2: \"It's a good stimulator, huh?\" (+3)</li></ol></li>\n</ul>\n"
		},
		"8/25 Thursday": {
			"Evening": "<ul>\n<li>Crossword: \"Sweltering\" <strong>(Knowledge +2)</strong> <strong>(Knowledge Lv. 5)</strong></li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hanged +2)</strong></li>\n<li>Hierophant Rank 4 <strong>(Kindness +4)</strong><ol>\n<li>Choice 1: \"Tell me more.\" (+3)</li>\n<li>Choice 2: \"Call Sojiro's phone.\" (+3)</li>\n<li>(Phone) Choice 1: \"Understood.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/26 Friday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Ask Lala at Bar Crosswords to work there</li>\n<li>Work at bar <strong>(Kindness +3)</strong></li>\n</ul>\n"
		},
		"8/27 Saturday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Star Rank 7 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 3: \"It may come down to luck.\" (+3)</li>\n<li>Choice 2: \"I believe in you.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"8/28 Sunday": {
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +3)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong></li>\n<li>Work at bar, Talk to Scary-looking Man <strong>(Kindness +4, Guts +2)</strong> <strong>(Guts Lv. 5)</strong> <strong>(Request \"We Aren't Just Your Slaves\" unlocked)</strong></li>\n</ul>\n"
		},
		"8/29 Monday": {
			"Evening": "<ul>\n<li>Request \"Who's Muscling in Yongen-Jaya?\" unlocked</li>\n<li>Devil Rank 4 <strong>(Charm +3)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"Of course we are.\" (+2)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Leave it to me.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/30 Tuesday": {
			"Evening": "<ul>\n<li>Crossword: \"Hacking\" <strong>(Knowledge +2)</strong></li>\n<li>Fortune Rank 7<ol>\n<li>Choice 3: \"I don't think so.\" (+3)</li>\n<li>(Phone) Choice 1: \"Are you gonna be okay?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/31 Wednesday": {
			"Class": "<ul>\n<li>Hermit Rank 1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Finish watching \"31\" <strong>(Guts +5)</strong></li>\n</ul>\n"
		}
	},
	"September": {
		"9/1 Thursday": {
			"Evening": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Fortune Rank 7.1 <strong>(Request \"Debunking the Psychic!\" unlocked)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"9/2 Friday": {
			"Daytime": "<ul>\n<li>Buy Broken Laptop from recycling shop</li>\n<li>Buy PC Tool Set from Akihabara</li>\n<li>Buy Phantom Wafers, Thief Mask, and Calling Postcard from Shibuya</li>\n<li>Talk to Futaba outside Leblanc, Hermit Rank 2 <strong>(Requires Kindness Lv. 4)</strong><ol>\n<li>Choice 2: \"That's a great idea.\" (+2)</li>\n<li>Choice 1: \"If we work together.\" (+3)</li>\n<li>Choice 1: \"Sounds good to me.\" (+0)</li>\n<li>(Phone) Choice 1: \"I bet it will.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Typhoon\" <strong>(Knowledge +2)</strong></li>\n<li>Moon Rank 6 (No Persona Needed)</li>\n</ul>\n"
		},
		"9/3 Saturday": {
			"Class": "<ul>\n<li>Question: \"Prosperity.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 7.1 <strong>(Requires Knowledge Lv. 5)</strong> <strong>(Request \"Upstaging the Stage Mother\" unlocked)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"That won't work.\" (+2)</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"9/4 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>\n<li>Request \"Winners Don't Use Cheats\" flag</li>\n<li>Investigate Shibuya arcade <strong>(Request \"Winners Don't Use Cheats\" unlocked)</strong></li>\n<li>Hermit Rank 3<ol>\n<li>Choice 3: \"I was about to come find you.\" (+3)</li>\n<li>Choice 1: \"Good to see you again.\" (+3)</li>\n<li>(Phone) Choice 3: \"We'll both do our best.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Phantom Wafers for Strength Up Ofuda x2</li>\n<li>Hanged Rank 5 <strong>(Proficiency +3)</strong><ol>\n<li>-</li>\n<li>Choice 2: \"You're pathetic.\" (+3)</li>\n<li>Choice 3: \"I'll stick around for the guns.\" (+3)</li>\n<li>(Phone) Choice 1: \"You're right.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/5 Monday": {
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hanged +2)</strong></li>\n<li>Strength Hangout Beach</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 5 <strong>(Charm +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"That's unforgivable.\" (+3)</li>\n<li>(Phone) Choice 1: \"I don't mind.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/6 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Chronostasis.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Death Rank 7.1 <strong>(Requires Charm Lv. 4)</strong> <strong>(Request \"Bad Medicine\" unlocked)</strong><ol>\n<li>-</li>\n<li>Choice 3: <strong>\"I'm your ally.\"</strong> (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"9/7 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/8 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/9 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/10 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/11 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/12 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/13 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/14 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Money loans for collateral.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +5)</strong></li>\n</ul>\n"
		},
		"9/15 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/16 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/17 Saturday": {
			"Class": "<ul>\n<li>Question: \"Cats eating human tongues.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"9/18 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with desk in your room, Repair laptop <strong>(Proficiency +5)</strong> <strong>(Proficiency Lv. 5)</strong></li>\n</ul>\n"
		},
		"9/19 Monday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Bad Medicine</li>\n<li>The Lovesick Cyberstalking Girl</li>\n<li>Calling for Justice for Cats</li>\n<li>Debunking the Psychic!</li>\n<li>Who's Been Assaulting People?</li>\n<li>We Aren't Just Your Slaves</li>\n<li>Who's Muscling in Yongen-Jaya?</li>\n<li>Winners Don't Use Cheats, attempt needed to unlock Tower Rnk 1</li>\n<li>Upstaging the Stage Mother</li></ol></li>\n<li><strong>Need to obtain Tower persona</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Festival\" <strong>(Knowledge +2)</strong></li>\n<li>Call Kawakami for massage</li>\n<li>Trade Thief Mask for Magic UP Fuda x2</li>\n<li>Star Rank 8 <strong>(Knowledge +2)</strong> <strong>(Throw away points)</strong><ol>\n<li>Choice 3: \"I'm glad her heart changed.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"I support it.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/20 Tuesday": {
			"Daytime": "<ul>\n<li>Priestess Rank 8<ol>\n<li>Choice 1: \"He says that to all his girls.\" (+2)</li>\n<li>Choice 1: \"Absolutely.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li><strong>[Optional]</strong> Devil Hangout Odaiba<ol>\n<li>Choice 2: \"That's right.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"9/21 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Central Europe.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Talk to Shinya in Akihabara arcade</li>\n<li>Tell Futaba outside Leblanc to hack site</li>\n<li>Report back to Shinya, Tower Rank 1 <strong>(Kindness +7)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 6<ol>\n<li>Choice 3: \"A while, huh?\" (+3)</li>\n<li>Choice 2: \"\u2026You've been through a lot.\" (+2)</li>\n<li>Choice 1: \"This is nothing.\" (+3)</li>\n<li>Choice 1: \"Same.\" (+3)</li>\n<li>Choice 2: \"Because we're similar.\" (+2)</li>\n<li>Choice 1: \"I think you're right.\" (+3)</li>\n<li>(Phone) Choice 3: \"My bad, I guess.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/22 Thursday": {
			"Daytime": "<ul>\n<li>Star Hangout Akihabara <strong>(Emperor +3)</strong><ol>\n<li>Choice 1: \"Let's take things slow.\" (+3)</li>\n<li>Choice 3: \"How about stripping?\" (Emperor +3)</li>\n<li>Choice 3: \"That's fine.\" (Emperor +2)</li>\n<li>Choice 3: \"I can understand both.\" (Fortune +2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Ten years in prison.\" <strong>(Knowledge +2)</strong></li>\n<li>Hierophant Rank 5 <strong>(Kindness +3)</strong> <strong>(Kindness Lv. 5)</strong><ol>\n<li>Choice 3: \"I think I'm addicted!\" (+3)</li>\n<li>Choice 2: \"She wasn't normal, huh?\" (+3)</li>\n<li>Choice 1: \"It really paid off in the end.\" (+2)</li>\n<li>(Phone) Choice 2: \"She needs a balanced diet.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/23 Friday": {
			"Class": "<ul>\n<li>Finish reading \"Billiards Magician\" <strong>(Masse Shot unlocked)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Councillor Rank 6<ol>\n<li>Choice 2: \"Another cup?\" (+2)</li>\n<li>Choice 1: \"I can do that.\" (+3)</li>\n<li>-</li>\n<li>Choice 3: \"So give up.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Calm down.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Maid Cafe <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"9/24 Saturday": {
			"Train": "<ul>\n<li>Finish reading \"Night Skies\" <strong>(Ikebukuro unlocked)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"20 white and 12 black.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Hermit Rank 4<ol>\n<li>Choice 2: \"Let's do this together.\" (+3)</li>\n<li>-</li>\n<li>Choice 3: \"I think it's cute.\" (+3)</li>\n<li>(Phone) Choice 3: \"I'll help you anytime.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 9 Friendship<ol>\n<li>Choice 1: \"Give it all you got.\" (+2)</li>\n<li>Choice 3: \"A very queenly decision.\" (+3)</li>\n<li>Choice 1: \"I want to become stronger.\" (+0)</li>\n<li>(Phone) Choice 3: \"Let's win the next one.\" (+2)</li></ol></li>\n<li>Star Rank 9 Romance<ol>\n<li>Choice 1: \"Give it all you got.\" (+2)</li>\n<li>Choice 3: \"A very queenly decision.\" (+3)</li>\n<li>Choice 2: \"I want to stay by your side.\" (+0)</li>\n<li>Choice 1: \"I want us to date.\" (+0)</li>\n<li>(Phone) Choice 3: \"It was love at first sight.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/25 Sunday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Leblanc-9/25 <strong>(Guts +5)</strong><ol>\n<li>Win or lose (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 8 (No Persona Needed) <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"9/26 Monday": {
			"Daytime": "<ul>\n<li>Tower Rank 2 <strong>(Kindness +5)</strong><ol>\n<li>Choice 2: \"Don't compare me to you.\" (+3)</li>\n<li>Choice 2: \"What a rude employee.\" (+2)</li>\n<li>Choice 2: \"Do you admire them?\" (+2)</li>\n<li>Choice 3: \"I'll let them know.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'll work hard.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Billiards <strong>(Random Stat +3)</strong> <strong>(Technical Lv. 4)</strong></li>\n</ul>\n"
		},
		"9/27 Tuesday": {
			"Daytime": "<ul>\n<li>Interact with crane game in Akihabara arcade<ol>\n<li>Receive Jack Frost Doll</li></ol></li>\n<li>Councillor Rank 7<ol>\n<li>Choice 3: \"Are you a fan?\" (+3)</li>\n<li>Choice 2: \"As in, removing them?\" (+3)</li>\n<li>Choice 1: \"The change of heart?\" (+3)</li>\n<li>Choice 3: \"It's intriguing.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 6 <strong>(Kindness +5)</strong><ol>\n<li>Choice 3: \"To each his own.\" (+2)</li>\n<li>Choice 3: \"Shut your mouth.\" (+3)</li>\n<li>Choice 1: \"Saving Futaba was no mistake.\" (+2)</li>\n<li>(Phone) Choice 3: \"If I can help somehow\u2026\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/28 Wednesday": {
			"Train": "<p>Evening: Finish reading \"Chinese Sweets\" <strong>(Chinatown unlocked)</strong></p>\n",
			"Class": "<ul>\n<li>Question: \"Phantom.\", \"Vibration.\", and \"Syndrome.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Reach treasure in Spaceport Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Ranking\" <strong>(Knowledge +2)</strong></li>\n<li>Call Kawakami for massage</li>\n<li>Star Hangout Jinbocho<ol>\n<li>Choice 1: \"Leave it to me.\" (+3)</li>\n<li>Receive King Piece</li></ol></li>\n</ul>\n"
		},
		"9/29 Thursday": {
			"Class": "<ul>\n<li>Question: \"Imperial Household Agency.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Divulging someone's crimes.\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"9/30 Friday": {
			"Class": "<ul>\n<li>Finish reading \"Theme Park Escort\" <strong>(Maihama unlocked)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Clear Spaceport Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Strength Hangout Maid Cafe</li>\n</ul>\n"
		}
	},
	"October": {
		"10/1 Saturday": {
			"Daytime": "<ul>\n<li>Tower Rank 3 <strong>(Kindness +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"That's the spirit.\" (+2)</li>\n<li>(Phone) Choice 1: \"Sure.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 6<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Girls.\" (+3)</li>\n<li>Choice 3: \"You should buy us something.\" (+3)</li>\n<li>(Phone) Choice 1: \"He's my age, so it comes easier.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/2 Sunday": {
			"Daytime": "<ul>\n<li>Emperor Rank 8<ol>\n<li>Choice 3: \"It has to be Ann.\" (+2)</li>\n<li>Choice 3: \"You've really grown, Yusuke.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Calling Postcard for Strawberry Daifuku x2</li>\n<li>Hermit Hangout Movies <strong>(Knowledge +7)</strong><ol>\n<li>Choice 2: \"I think so\u2026\" (+3)</li></ol></li>\n</ul>\n"
		},
		"10/3 Monday": {
			"Class": "<ul>\n<li>Question: \"Stars.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"10/4 Tuesday": {
			"Daytime": "<ul>\n<li>Priestess Rank 9 Friendship<ol>\n<li>Choice 2: \"Your fight's with me.\" (+3)</li>\n<li>Choice 1: \"We should get out of here.\" (+2)</li>\n<li>Choice 2: \"That was the right move.\" (+2)</li>\n<li>Choice 1: \"I'm a regular here.\" (+3)</li>\n<li>Choice 1: \"You'll find someone someday.\" (+3)</li>\n<li>(Phone) Choice 1: \"No problem at all.\" (+2)</li></ol></li>\n<li>Priestess Rank 9 Romance<ol>\n<li>Choice 2: \"Your fight's with me.\" (+3)</li>\n<li>Choice 1: \"We should get out of here.\" (+2)</li>\n<li>Choice 2: \"That was the right move.\" (+2)</li>\n<li>Choice 1: \"I'm a regular here.\" (+3)</li>\n<li>Choice 2: \"I'll be your study partner.\" (+0)</li>\n<li>Choice 1: \"I do.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'd do anything for you.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 6<ol>\n<li>-</li>\n<li>Choice 1: \"He must not like you.\" (+2)</li>\n<li>Choice 2: \"You should trust in her.\" (+2)</li>\n<li>Choice 1: \"That's the spirit\" (+2)</li>\n<li>(Phone) Choice 3: \"I'll dig up some more for you.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/5 Wednesday": {
			"Class": "<ul>\n<li>Read \"Master Swordsman\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Hermit Rank 5<ol>\n<li>-</li>\n<li>Choice 1: \"I think you're right.\" (+3)</li>\n<li>Choice 3: \"He's the protagonist.\" (+3)</li>\n<li>(Phone) Choice 1: \"You did great.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Star Rank 10</li>\n</ul>\n"
		},
		"10/6 Thursday": {
			"Train": "<ul>\n<li>Finish reading \"Master Swordsman\" <strong>(Guts +7)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Joseph-Ignace Guillotin.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Tower Rank 4.0 <strong>(Kindness +3)</strong><ol>\n<li>Choice 3: \"Yeah, you tell him!\" (+2)</li>\n<li>Choice 1: \"Don't get so worked up.\" (+0)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Black\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Destiny Land</li>\n</ul>\n"
		},
		"10/7 Friday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Burger-kun Doll</li></ol></li>\n<li>Buy all books from Jinbocho</li>\n<li>Emperor Rank 9<ol>\n<li>Choice 1: \"Her love for her son.\" (+3)</li>\n<li>Choice 1: \"You've really changed, Yusuke.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Moon Rank 6.1 (No Persona Needed)</li>\n</ul>\n"
		},
		"10/8 Saturday": {
			"Daytime": "<ul>\n<li>Tower Hangout Asakusa<ol>\n<li>Choice 1: \"Let's walk around and eat.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/9 Sunday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Nakano <strong>(Nakano unlocked)</strong><ol>\n<li>Choice 3: \"Work a part time job?\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"Basically my sister.\" (Hanged +1)</li>\n<li>Choice 1: \"He's my boss.\" (Hanged +2)</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 9 (No Persona Needed)</li>\n</ul>\n"
		},
		"10/10 Monday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Leblanc-10/10 <strong>(Reload after seeing event)</strong><ol>\n<li>Choice 1: \"Of course.\" (+3) </li></ol></li>\n<li>Tower Rank 5 <strong>(Kindness +3)</strong><ol>\n<li>Choice 1: \"It was pretty weird.\" (+3)</li>\n<li>Choice 2: \"I'm sure you can do it.\" (+2)</li>\n<li>Choice 2: \"You need a new strategy.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'll be cheering you on.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Halloween\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/11 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Bouba.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"10/12 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/13 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/14 Friday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Request \"The Killer Who Cleans Up Trash\" unlocked</li>\n<li>Emperor Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 7 <strong>(Requires Kindness Lv. 5)</strong> <strong>(Kindness +2)</strong><ol>\n<li>Choice 1: \"You might be right.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Feel like a real dad now?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/15 Saturday": {
			"Daytime": "<ul>\n<li>Tower Rank 6.0 <strong>(Kindness +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I believe in you.\" (+3)</li>\n<li>Choice 3: \"I'm worried about you.\" (+0)</li>\n<li>(Phone) Choice 2: \"That's up to you.\" (+0)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 7<ol>\n<li>Choice 2: \"Absolutely.\" (+3)</li>\n<li>Choice 2: \"He's clever.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Bring it on.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/16 Sunday": {
			"Daytime": "<ul>\n<li>Visit capsule row in Akihabara, Roll gacha for Gear Girimehkala x2</li>\n<li>Trade Gear Girimehkala with man near capsule row for Mystery Stew</li>\n<li>Hermit Rank 6<ol>\n<li>Choice 2: \"That must have been a shock.\" (+3)</li>\n<li>Choice 1: \"You didn't know any better.\" (+2)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Are you running away again?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Gear Girimehkala for Hot-Blooded Sword</li>\n<li>Hanged Rank 7.1 <strong>(Requires Guts Lv. 5)</strong> <strong>(Request \"Shady Deal in the Shadows\" unlocked)</strong><ol>\n<li>Choice 2: \"I did it all for Iwai.\" (+3)</li>\n<li>Choice 1: \"I will.\" (+2)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"10/17 Monday": {
			"All Day": "<ul>\n<li>Exams: \"32 surfaces.\", \"It used to be one color.\", and \"Black and white picture.\"</li>\n</ul>\n"
		},
		"10/18 Tuesday": {
			"All Day": "<ul>\n<li>Exams: \"Charles-Henri Sanson\" and \"It's a hereditary profession.\"</li>\n</ul>\n"
		},
		"10/19 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"Slave labor.\" and \"3 bees in all of Europe.\"</li>\n</ul>\n"
		},
		"10/20 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/21 Friday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/22 Saturday": {
			"Class": "<ul>\n<li>Question: \"15.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 7<ol>\n<li>-</li>\n<li>Choice 2: \"Don't let him provoke you.\" (+3)</li>\n<li>Choice 2: <strong>\"You're charming as you are.\"</strong> (+3)</li>\n<li>(Phone) Choice 1: \"That's the spirit.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/23 Sunday": {
			"Evening": "<ul>\n<li>Moon Rank 7 (No Persona Needed)</li>\n</ul>\n"
		},
		"10/24 Monday": {
			"Class": "<ul>\n<li>Question: \"Memory bias.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Exam results <strong>(Charm +5)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Sojiro for exam reward</li>\n<li>Devil Rank 7.1 <strong>(Request \"Fighting for Truth of Journalism\" unlocked)</strong><ol>\n<li>Choice 2: \"You seem tired.\" (+2)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"10/25 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/26 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"10/27 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/28 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"10/29 Saturday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/30 Sunday": {
			"Daytime": "<ul>\n<li>Tower Hangout Maihama<ol>\n<li>Choice 3: \"Coming alone isn't bad.\" (+3)</li>\n<li>Receive Balloons</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Mystery Stew for Angel Badge - Angelic Grace</li>\n<li>Strength Hangout Art Museum</li>\n</ul>\n"
		},
		"10/31 Monday": {
			"Class": "<ul>\n<li>Read \"Call Me Chief\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Draw on classroom chalkboard <strong>(Guts +2)</strong></li>\n<li>Empress Rank 1</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Stalls\" <strong>(Knowledge +2)</strong></li>\n<li>Hierophant Rank 8 <strong>(Request \"The Mondayey-grubbing Uncle\" unlocked)</strong><ol>\n<li>Choice 2: \"Something with curry.\" (+3)</li>\n<li>Choice 2: \"I was just protecting Futaba.\" (+2)</li></ol></li>\n</ul>\n"
		}
	},
	"November": {
		"11/1 Tuesday": {
			"Daytime": "<ul>\n<li>Talk to Futaba to initiate solo battle, Hierophant Rank 8.1</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 8<ol>\n<li>Choice 2: \"I know.\" (+3)</li>\n<li>Choice 3: \"It's because you're strong.\" (+3)</li>\n<li>Choice 2: <strong>\"Hell yeah I am.\"</strong> (+3)</li>\n<li>(Phone) Choice 2: \"It was all your own will.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/2 Wednesday": {
			"Train": "<ul>\n<li>Finish reading \"Call Me Chief\" <strong>(Kindness +7)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"A share of stolen goods.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Hermit Rank 7 <strong>(Request \"Daughter's Just a Meal Ticket\" unlocked)</strong><ol>\n<li>Choice 2: \"We have to put a stop to this.\" (+2)</li>\n<li>Choice 1: \"I'll do it, for you.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 7 <strong>(Requires Knowledge Lv. 4)</strong><ol>\n<li>Choice 2: \"That's why it's so fun.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I couldn't let myself lose.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: <strong>\"I'll think about it.\"</strong> (+0)</li>\n<li>(Phone) Choice 3: \"We're rivals, aren't we?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/3 Thursday": {
			"Daytime": "<ul>\n<li>Tower Rank 7<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 9<ol>\n<li>Choice 1: \"It's great.\" (+3)</li>\n<li>Choice 2: \"You have a great daughter.\" (+3)</li>\n<li>(Phone) Choice 2: \"Futaba did great.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/4 Friday": {
			"Class": "<ul>\n<li>Question: \"A sword.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Tower Rank 8 <strong>(Kindness +5)</strong> <strong>(Request \"A Mother's Aggression\" unlocked)</strong><ol>\n<li>Choice 2: \"No, she's not.\" (+2)</li>\n<li>Choice 3: \"Believe in them.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Let's save her.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Reward\" <strong>(Knowledge +2)</strong></li>\n<li>Justice Rank 8<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"I definitely wouldn't lose.\" (+3)</li>\n<li>Choice 2: \"Really hate losing, don't you?\" (+3)</li>\n<li>Choice 1: <strong>\"I accept.\"</strong> (+0)</li></ol></li>\n</ul>\n"
		},
		"11/5 Saturday": {
			"Train": "<p>Read \"Heroic Revelations\"</p>\n",
			"Class": "<ul>\n<li>Finish reading \"Heroic Revelations\" <strong>(Knowledge +7)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Priestess Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Moon Rank 8 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/6 Sunday": {
			"Daytime": "<ul>\n<li>Request \"Man of Many Faces and Debts\" unlocked</li>\n<li>Empress Hangout Asakusa<ol>\n<li>Choice 2: \"It was fun.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"There's nothing to fear.\" (+3) (Devil +2)</li>\n<li>Receive Kumade</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 10 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/7 Monday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Wanna-kun Doll</li></ol></li>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Shady Deal in the Shadows</li>\n<li>Fighting for Truth of Journalism</li>\n<li>Man of Many Faces and Debts</li>\n<li>Winners Don't Use Cheats</li>\n<li>The Killer Who Cleans Up Trash</li>\n<li>Daughter's Just a Meal Ticket</li>\n<li>A Mother's Aggression</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Devil Rank 8 <strong>(Charm +5)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: <strong>\"I'll go with you\"</strong> (+3)</li>\n<li>(Phone) Choice 1: \"Good luck.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/8 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Any age.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Death Rank 8<ol>\n<li>-</li>\n<li>Choice 2: \"Let's get to work, doctor.\" (+3)</li>\n<li>Choice 1: <strong>\"It's for Miwa-chan.\"</strong> (+3)</li>\n<li>(Phone) Choice 1: \"I'll be cheering you on.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 8<ol>\n<li>Choice 2: \"I dunno.\" (+2)</li>\n<li>Choice 2: \"I guess I could consider it.\" (+3)</li>\n<li>(Phone) Choice 1: \"Understood.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/9 Wednesday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Reach barrier in Casino Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Moon Rank 9 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/10 Thursday": {
			"Train": "<p>Read \"Reckless Casanova\"</p>\n",
			"Class": "<ul>\n<li>Question: \"Crow eyes are hard to see.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Reach treasure in Casino Palace</strong></li>\n<li><strong>Need to obtain Empress persona</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>TV Quiz: \"Me in front of my TV.\" <strong>(Knowledge +2)</strong></li>\n<li>Hierophant Rank 10</li>\n</ul>\n"
		},
		"11/11 Friday": {
			"Class": "<ul>\n<li>Finish reading \"Reckless Casanova\" <strong>(Charm +7)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Attempt to send calling card</li>\n<li>Empress Rank 2<ol>\n<li>Choice 3: \"Are you starting a farm?\" (+3)</li>\n<li>Choice 3: \"He sounds suspicious.\" (+2)</li>\n<li>Choice 1: \"This is a complex issue.\" (+3)</li>\n<li>(Phone) Choice 3: \"Jewel Melon.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 2: \"You're not giving up, are you?\" (+2)</li>\n<li>Choice 1: <strong>\"I can't leave you.\"</strong> (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I didn't take it seriously.\" (+0)</li></ol></li>\n<li>Devil Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 2: \"You're not giving up, are you?\" (+2)</li>\n<li>Choice 1: <strong>\"I can't leave you.\"</strong> (+3)</li>\n<li>-</li>\n<li>Choice 1: \"I took it seriously.\" (+0)</li>\n<li>Choice 1: \"I love you, Ichiko.\" (+0)</li>\n<li>(Phone) Choice 1: \"I wanted to hear your voice.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/12 Saturday": {
			"Class": "<ul>\n<li>Question: \"Because the voice is synthetic.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Tower Rank 9 <strong>(Kindness +5)</strong><ol>\n<li>Choice 1: \"I'm glad to hear that.\" (+3)</li>\n<li>Choice 3: \"It means you've matured.\" (+3)</li>\n<li>Choice 1: \"He wants to win at all costs.\" (+2)</li>\n<li>(Phone) Choice 3: \"You did a great job too.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 9<ol>\n<li>Choice 3: \"Are you sure he's still alive?\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"You need to trust your son.\" (+3)</li>\n<li>Choice 1: \"Kaoru is really strong-willed.\" (+3)</li>\n<li>(Phone) Choice 1: \"Like father, like son.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/13 Sunday": {
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Buy Moon Dango from Yongen-Jaya grocery store</li>\n<li>Death Rank 9 Friendship<ol>\n<li>Choice 3: \"It was rough.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"It wanted to see you.\" (+0)</li>\n<li>Choice 1: \"I love you.\" (+2)</li>\n<li>Choice 2: \"That sounds good.\" (+0)</li>\n<li>(Phone) Choice 3: \"I'm glad we saw it through.\" (+2)</li></ol></li>\n<li>Death Rank 9 Romance<ol>\n<li>Choice 3: \"It was rough.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"It wanted to see you.\" (+0)</li>\n<li>Choice 1: \"I love you.\" (+2)</li>\n<li>Choice 1: \"It isn't a joke.\" (+3)</li>\n<li>(Phone) Choice 2: \"So did you.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Moon Dango for Kintaro Axe</li>\n<li>Empress Hangout Movies <strong>(Guts +7)</strong><ol>\n<li>Choice 2: \"I like them a lot.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"11/14 Monday": {
			"Train": "<p>Read \"The Art of Automata\"</p>\n",
			"Class": "<ul>\n<li>Question: \"Because of high altitude.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Empress Rank 3<ol>\n<li>Choice 3: \"It'll be okay, I promise.\" (+3)</li>\n<li>Choice 1: \"I don't want to go with you.\" (+3)</li>\n<li>Choice 2: \"Not yet.\" (+3)</li>\n<li>(Phone) Choice 1: \"Smart response.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Bashing\" <strong>(Knowledge +2)</strong></li>\n<li>Devil Rank 10</li>\n</ul>\n"
		},
		"11/15 Tuesday": {
			"Class": "<ul>\n<li>Question: \"His head was put on display.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Death +2)</strong></li>\n<li>Empress Rank 4 <strong>(Requires Proficiency Lv. 5)</strong><ol>\n<li>Choice 3: \"It must be amazing.\" (+3)</li>\n<li>Choice 3: \"Cheers.\" (+3)</li>\n<li>Choice 2: \"I can taste the elephant.\" (+3)</li>\n<li>Choice 3: \"Let's ask him.\" (+3)</li>\n<li>Choice 3: \"I'm not really sure.\" (+3)</li>\n<li>(Phone) Choice 3: \"Let's get coffee again sometime.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 2: \"Well, fate can be changed.\" (+3)</li>\n<li>Choice 1: \"I like having my fortune read.\" (+0)</li>\n<li>(Phone) Choice 1: \"I'm planning on it.\" (+2)</li></ol></li>\n<li>Fortune Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 2: \"Well, fate can be changed.\" (+3)</li>\n<li>Choice 2: \"So I can be with you.\" (+0)</li>\n<li>(Phone) Choice 1: \"I wanted to hear your voice too.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/16 Wednesday": {
			"Class": "<ul>\n<li>Finish reading \"The Art of Automata\" <strong>(Proficiency +7)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Councillor Rank 8<ol>\n<li>Choice 2: \"What do you mean?\" (+3)</li>\n<li>Choice 1: \"Ooh, really?\" (+3)</li>\n<li>Choice 1: \"Thanks for the food!\" (+3)</li>\n<li>Choice 3: \"We've made a deal.\" (+3)</li>\n<li>Choice 1: \"Congratulations.\" (+3)</li>\n<li>Choice 1: \"I sure do.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"He's a good friend.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Death +2)</strong></li>\n<li>Buy \"Knowing the Heart\" from Jinbocho</li>\n<li>Moon Rank 10 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/17 Thursday": {
			"Train": "<ul>\n<li>Finish reading \"Knowing the Heart\" <strong>(Additional Technical conditions unlocked)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Cochleoid.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Lexy Doll</li></ol></li>\n<li>Councillor Rank 9<ol>\n<li>-</li>\n<li>Choice 1: \"Kind of sad\u2026\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Death Rank 10 Romance <strong>(Romance route only)</strong></li>\n<li>Free Time <strong>(Friendship route only)</strong></li>\n</ul>\n"
		},
		"11/18 Friday": {
			"Daytime": "<ul>\n<li>Councillor Rank 10 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/19 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"11/20 Sunday": {
			"Daytime": "<ul>\n<li>Do not accept her deal</li>\n</ul>\n"
		},
		"11/21 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"11/22 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/23 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/24 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>TV Quiz: \"Speaker of the House decides.\"</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/25 Friday": {
			"Daytime": "<ul>\n<li>Request \"Swindling Old Folk is Pretty Low\" unlocked</li>\n<li>Empress Rank 5<ol>\n<li>Choice 2: \"Somebody's telling the truth.\" (+3)</li>\n<li>Choice 3: \"There has to be another way.\" (+2)</li>\n<li>Choice 3: \"I don't think so.\" (+3)</li>\n<li>(Phone) Choice 3: \"Pinch yourself.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Strength Hangout Leblanc</li>\n</ul>\n"
		},
		"11/26 Saturday": {
			"Daytime": "<ul>\n<li>Hermit Rank 8<ol>\n<li>Choice 1: \"That's incredible.\" (+3)</li>\n<li>Choice 1: \"You worked really hard too.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Want more pats?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 10</li>\n</ul>\n"
		},
		"11/27 Sunday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Sheep Man Doll</li></ol></li>\n<li>Buy Legendary Yaki-Imo from Yongen-Jaya street vendor</li>\n<li>Hermit Rank 9 Friendship<ol>\n<li>Choice 1: \"You've really matured.\" (+3)</li>\n<li>Choice 2: \"Are you okay, Futaba?\" (+3)</li>\n<li>Choice 2: \"No way.\" (+2)</li>\n<li>Choice 1: \"Because we're teammates.\" (+0)</li>\n<li>(Phone) Choice 3: \"A key item.\" (+2)</li></ol></li>\n<li>Hermit Rank 9 Romance<ol>\n<li>Choice 1: \"You've really matured.\" (+3)</li>\n<li>Choice 2: \"Are you okay, Futaba?\" (+3)</li>\n<li>Choice 2: \"No way.\" (+2)</li>\n<li>Choice 2: \"Because I love you.\" (+0)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Do I really have to say it?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Legendary Yaki-Imo for Empowering Ofuda x3</li>\n<li>Fortune Rank 10</li>\n</ul>\n"
		},
		"11/28 Monday": {
			"Daytime": "<ul>\n<li>Empress Rank 6<ol>\n<li>Choice 3: \"Can you make some for me?\" (+3)</li>\n<li>Choice 1: \"I had no idea.\" (+3)</li>\n<li>Choice 3: \"Black like coffee?\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"Be strong, Haru.\" (+3)</li>\n<li>(Phone) Choice 1: \"You can talk to me anytime.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Charisma\" <strong>(Knowledge +2)</strong></li>\n<li>Devil Hangout Ginza<ol>\n<li>Choice 1: \"Get pumped!\" (+3)</li>\n<li>Receive Sushi Mug</li></ol></li>\n</ul>\n"
		},
		"11/29 Tuesday": {
			"Daytime": "<ul>\n<li>Empress Rank 7<ol>\n<li>-</li>\n<li>Choice 3: \"What do you want to do?\" (+3)</li>\n<li>Choice 3: \"You should tell him that.\" (+3)</li>\n<li>Choice 2: \"You can do it, Haru.\" (+3)</li>\n<li>(Phone) Choice 2: \"I'll always have your back.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/30 Wednesday": {
			"Daytime": "<ul>\n<li>Hermit Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		}
	},
	"December": {
		"12/1 Thursday": {
			"Daytime": "<ul>\n<li>Empress Rank 8<ol>\n<li>Choice 1: \"The soil?\" (+3)</li>\n<li>Choice 2: \"He's going to love it.\" (+3)</li>\n<li>Choice 2: \"You're amazing, Haru.\" (+3)</li>\n<li>(Phone) Choice 3: \"I want some too.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Hangout Inokashira<ol>\n<li>Choice 3: \"Planning for a picnic?\" (+3)</li>\n<li>Receive Swan Boat</li></ol></li>\n</ul>\n"
		},
		"12/2 Friday": {
			"Daytime": "<ul>\n<li>Empress Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 3: \"Give it all you've got, Haru.\" (+3)</li>\n<li>Choice 2: \"You did amazing.\" (+3)</li>\n<li>Choice 1: \"He saw us as good friends.\" (+0)</li>\n<li>(Phone) Choice 2: \"You sound happy.\" (+3)</li></ol></li>\n<li>Empress Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 3: \"Give it all you've got, Haru.\" (+3)</li>\n<li>Choice 2: \"You did amazing.\" (+3)</li>\n<li>Choice 2: \"I like you too, Haru.\" (+0)</li>\n<li>(Phone) Choice 2: \"I wanted to hear your voice.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Influenza\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Underground Mall</li>\n</ul>\n"
		},
		"12/3 Saturday": {
			"Daytime": "<ul>\n<li>Tower Rank 10 <strong>(Kindness +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/4 Sunday": {
			"Daytime": "<ul>\n<li>Death Rank 10 Friendship <strong>(Friendship route only)</strong></li>\n<li>Free Time <strong>(Romance route only)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Hangout Jinbocho<ol>\n<li>Choice 1: \"Autobiographies of great people.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"12/5 Monday": {
			"Daytime": "<ul>\n<li>Empress Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/6 Tuesday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Ogikubo<ol>\n<li>Choice 1: \"I'm in love.\" (+3)</li>\n<li>Receive Ramen Bowl</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Hangout Oshiage<ol>\n<li>Choice 2: \"Such a delicious thrill\u2026\" (+3)</li>\n<li>Receive Sky Tower Lamp</li></ol></li>\n</ul>\n"
		},
		"12/7 Wednesday": {
			"Daytime": "<ul>\n<li>Faith Hangout Shinagawa<ol>\n<li>Choice 1: \"Yeah.\" (+3)</li>\n<li>Choice 3: \"Let's see both.\" (+3)</li>\n<li>Receive Sea Slug Doll</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Illuminate\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/8 Thursday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Asakusa<ol>\n<li>Choice 3: \"Hey look, a ninja.\" (+3)</li>\n<li>Receive I &lt;3 Tokyo Shirt</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Attempted murder.\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/9 Friday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Reach treasure in Cruiser Palace</strong></li>\n<li>Justice Rank 9 <strong>(Auto)</strong></li>\n<li>Justice Rank 10 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Temperance Hangout Odaiba Romance <strong>(Romance route only)</strong><ol>\n<li>-</li>\n<li>Receive Night Pennant</li></ol></li>\n<li><strong>Choose to \"I want to keep our promise.\" before going to bed</strong></li>\n</ul>\n"
		},
		"12/10 Saturday": {
			"Daytime": "<ul>\n<li><strong>Clear Cruiser Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Call Kawakami for massage</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/11 Sunday": {
			"Daytime": "<ul>\n<li>Request \"The Head Honcho in Showbiz\" unlocked</li>\n<li>Buy Angel Tart from Shibuya underground mall</li>\n<li>Priestess Hangout Chinatown<ol>\n<li>Choice 3: \"Spring rolls?\" (+3)</li>\n<li>Choice 2: \"Let's find some.\" (+3)</li>\n<li>Receive Shumai Cushion</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Angel Tart for Feverent Bat</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/12 Monday": {
			"Daytime": "<ul>\n<li>Request \"Lady-Killer's Ballad\" unlocked</li>\n<li>Emperor Hangout Ikebukuro<ol>\n<li>Choice 2: \"I'm glad you're better now.\" (+3)</li>\n<li>Receive Star Stickers</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Approval\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/13 Tuesday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Lovers Hangout Shibuya<ol>\n<li>Choice 1: \"Sounds like a good plan.\" (+3)</li>\n<li>Receive Choco Fountain</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/14 Wednesday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Nakano<ol>\n<li>Choice 2: \"Let's go to the game center.\" (+3)</li>\n<li>Choice 1: \"Let's check it out.\" (+3)</li>\n<li>-</li>\n<li>Receive Featherman Dolls</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/15 Thursday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Swindling Old Folk is Pretty Low</li>\n<li>The Head Honcho in Showbiz</li>\n<li>Lady-Killer's Ballad</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>TV Quiz: \"Can't be done by wanted men.\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/16 Friday": {
			"Daytime": "<ul>\n<li>Emperor Hangout Meiji-Shrine<ol>\n<li>Choice 3: \"Boatloads of money.\" (+3)</li>\n<li>Receive Hamaya</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/17 Saturday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Black Frost Doll</li></ol></li>\n<li>Priestess Hangout Suidobashi<ol>\n<li>Choice 3: \"Let's go ride something.\" (+3)</li>\n<li>Receive Gi-Nyant Doll</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/18 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/19 Monday": {
			"Evening": "<ul>\n<li>Crossword: \"Christmas\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/20 Tuesday": {
			"All Day": "<ul>\n<li>Exams: \"D.\", \"Over one billion yen.\", \"Having his head displayed.\", and \"Public performance.\"</li>\n</ul>\n"
		},
		"12/21 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"Hearts.\" and \"Attend.\"</li>\n</ul>\n"
		},
		"12/22 Thursday": {
			"All Day": "<ul>\n<li>Exams: \"Japan.\", \"Dreadnought.\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Emperor Hangout Ueno<ol>\n<li>Choice 2: \"Glad you're enjoying this.\" (+3)</li>\n<li>Receive Nude Statue</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n<li><strong>Last Opportunity to complete Strength social link</strong></li>\n</ul>\n"
		},
		"12/23 Friday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Talk to Sojiro for exam reward</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/24 Saturday": {
			"Class": "<ul>\n<li>Exam results <strong>(Charm +5)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Do not accept his deal</li>\n</ul>\n"
		},
		"12/25 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/26 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/27 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/28 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/29 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/30 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/31 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		}
	},
	"January": {
		"1/1 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/2 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/3 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/4 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/5 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/6 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/7 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/8 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/9 Monday": {
			"Daytime": "<ul>\n<li>Do not accept his deal</li>\n</ul>\n"
		},
		"1/10 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/11 Wednesday": {
			"Class": "<ul>\n<li>Question with matching arcana: \"How numerous they are.\" and \"The Eight Million Gods.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n"
		},
		"1/12 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/13 Friday": {
			"Daytime": "<ul>\n<li>Buy Special Chimaki from Kichijoji Chinese Stall</li>\n<li>Lovers Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Request \"A Small Cry for Help\" unlocked</li>\n<li>Trade Special Chimaki for Strength Belt - Resist Phys</li>\n<li>Strength Hangout Your Room</li>\n</ul>\n"
		},
		"1/14 Saturday": {
			"Class": "<ul>\n<li>Question: \"Iwate.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Chariot Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Request \"O My Young Sister, I Cry For You\" unlocked</li>\n<li>Crossword: \"Resolution\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/15 Sunday": {
			"Daytime": "<ul>\n<li>Hermit Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/16 Monday": {
			"Daytime": "<ul>\n<li>Emperor Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/17 Tuesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Buchimaru Doll</li></ol></li>\n<li>Priestess Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/18 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Impressive.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Empress Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/19 Thursday": {
			"Train": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 6<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"You have to face it.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Dionysus\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/20 Friday": {
			"Class": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/21 Saturday": {
			"Class": "<ul>\n<li>Question: \"A snake.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 7<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"You okay?\" (+3)</li>\n<li>Choice 1: \"That isn't true.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Of course.\" (+3)</li>\n<li>(Phone) Choice 3: \"I love a good challenge.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/22 Sunday": {
			"Daytime": "<ul>\n<li>Buy Supernova Burger from Big Bang Burger</li>\n<li>Faith Rank 8<ol>\n<li>Choice 1: \"Walk up to Sumire.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I'm here for you.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"I'm in love.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Sounds like progress.\" (+3)</li>\n<li>(Phone) Choice 3: \"Online.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Supernova Burger for Old Man's Elixir</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/23 Monday": {
			"Daytime": "<ul>\n<li>Faith Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 1: \"It's no problem.\" (+3)</li>\n<li>Choice 1: \"Definitely.\" (+3)</li>\n<li>Choice 1: \"Of course I do.\" (+3)</li>\n<li>Choice 3: \"This is a new beginning.\" (+3)</li>\n<li>Choice 3: \"Go ahead.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Let's stay friends.\" (+0)</li>\n<li>Choice 3: \"You can always rely on me.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'm glad to hear that.\" (+3)</li></ol></li>\n<li>Faith Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 1: \"It's no problem.\" (+3)</li>\n<li>Choice 1: \"Definitely.\" (+3)</li>\n<li>Choice 1: \"Of course I do.\" (+3)</li>\n<li>Choice 3: \"This is a new beginning.\" (+3)</li>\n<li>Choice 3: \"Go ahead.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I love you too.\" (+0)</li>\n<li>Choice 1: \"Calm down.\" (+3)</li>\n<li>Choice 3: \"You're so cute.\" (+3)</li>\n<li>(Phone) Choice 1: \"Get used to it.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Lachesis\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/24 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Kind-hearted.\", \"Negative.\", and \"Resentful.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Empress Hangout Tsukishima<ol>\n<li>Choice 1: \"We'll try together.\" (+3)</li>\n<li>Receive Giant Spatula</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/25 Wednesday": {
			"Class": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/26 Thursday": {
			"Train": "<p>Free Time</p>\n",
			"Daytime": "<ul>\n<li><strong>Reach final floor of Mementos Palace</strong><ol>\n<li>A Small Cry for Help</li>\n<li>O My Young Sister, I Cry For You</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/27 Friday": {
			"Class": "<ul>\n<li>Question: \"To friends of friends of friends.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Jagao Doll</li></ol></li>\n<li><strong>Reach treasure in Laboratory Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Crossword: \"Orochi\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/28 Saturday": {
			"Daytime": "<ul>\n<li>Request \"Fake-Man Show\" flag</li>\n<li>Hermit Hangout Akihabara<ol>\n<li>Choice 3: \"You feel betrayed\u2026\" (+3)</li>\n<li>Receive Hero Figurine</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/29 Sunday": {
			"Daytime": "<ul>\n<li>Request \"An Idol and a Unicorn\" flag</li>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/30 Monday": {
			"Daytime": "<ul>\n<li>Investigate Kichijoji <strong>(Request \"Fake-Man Show\" unlocked)</strong></li>\n<li>Investigate Akihabara <strong>(Request \"An Idol and a Unicorn\" unlocked)</strong></li>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Fake-Man Show</li>\n<li>An Idol and a Unicorn</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/31 Tuesday": {
			"Daytime": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		}
	},
	"February": {
		"2/1 Wednesday": {
			"Daytime": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"2/2 Thursday": {
			"Daytime": "<ul>\n<li>Faith Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Do not accept his deal</li>\n<li>Justice Rank 11 <strong>(Auto)</strong></li>\n</ul>\n"
		}
	}
};

function getFirstDayOfMonth(month) {
    const firstDate = Object.keys(walkthroughData[month])[0];
    return firstDate.split(' ')[1];
}

function getCurrentSelection() {
    const currentMonth = localStorage.getItem('selectedMonth');
    const currentDate = localStorage.getItem('selectedDate');
    return { currentMonth, currentDate };
}

function calculateNewDate(currentMonth, currentDate, offset) {
    const dates = Object.keys(walkthroughData[currentMonth]);
    const currentIndex = dates.indexOf(currentDate);

    let newDateIndex = currentIndex + offset;
    let newMonth = currentMonth;

    if (newDateIndex < 0) {
        newMonth = monthNames[monthNames.indexOf(currentMonth) - 1] || monthNames[monthNames.length - 1];
        newDateIndex = Object.keys(walkthroughData[newMonth]).length - 1;
    } else if (newDateIndex >= dates.length) {
        newMonth = monthNames[monthNames.indexOf(currentMonth) + 1] || monthNames[0];
        newDateIndex = 0;
    }

    const newDate = Object.keys(walkthroughData[newMonth])[newDateIndex];
    return { newMonth, newDate };
}

function calculateTotalDays(walkthroughData, monthNames) {
    let totalDays = 0;
    monthNames.forEach(month => {
        totalDays += Object.keys(walkthroughData[month]).length;
    });
    return totalDays;
}

function calculateCurrentDayIndex(walkthroughData, monthNames, currentMonth, currentDate) {
    let currentDayIndex = 0;
    let foundCurrentDay = false;
    for (const monthName of monthNames) {
        const dates = Object.keys(walkthroughData[monthName]);
        for (const day of dates) {
            if (monthName === currentMonth && day === currentDate) {
                foundCurrentDay = true;
                break;
            }
            currentDayIndex++;
        }
        if (foundCurrentDay) {
            break;
        }
    }
    return currentDayIndex;
}