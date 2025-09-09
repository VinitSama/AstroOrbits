import { Component, OnInit } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { MantraTable } from "./mantra-table/mantra-table";
import { BlogSection } from "../blog-section/blog-section";

@Component({
  selector: 'app-mantras',
  imports: [
    SectionTag,
    MantraTable,
    BlogSection
  ],
  templateUrl: './mantras.html',
  styleUrl: './mantras.css'
})
export class Mantras implements OnInit {

  svgColor!: ISvgColors;

  // articles: IArticle[] = [
  //   {
  //     title: "",
  //     content: "Veda is the existence of everything that a person holds onto. Divided into four - the Rigveda, the Yajurveda, the Samaveda and the Atharvaveda - these oldest sacred texts are the base of Hinduism and everything religious. One-fourth of the divine knowledge that each of these scriptures breathe to the world, are in the form of Mantras, which play a very significant role in almost every part of human life. Read this article to know in detail about Mantra, their significance in human life, their astrological relevance, most powerful mantras and their benefits.",
  //   },
  //   {
  //     title: "",
  //     content: "A Mantra can be a syllable, a spiritual sound or utterance, a word or group of words in Sanskrit. It is a very powerful medium to get connected with the divine energy and to bring happiness in one’s life. From Om Mantra to Gayatri Mantra and from Mahamrityunjaya Mantra to Durga Mantra, there are numerous mantras, which one can found in various religious texts and scriptures. They are a very important part of almost, in fact, every religious ritual and rite.<br><br>Whether it is Mundan ceremony, or Vivah Sanskar, Griha Pravesh or any other auspicious ritual, every Hindu ceremony requires the chanting of auspicious mantras for their successful completion. Not only in Hinduism, but people of other religions also chant mantras for peace and prosperity in their lives. For example, in Buddhism Om Mani Padme Hum is the mantra for transforming one’s impure existence into the purest reality of Buddha; Navkar Mantra in Jainism means to stop doing bad or evil and do the right for attaining liberation in afterlife; and so on.",
  //   },
  //   {
  //     title: "Astrological and Religious Importance of Mantra",
  //     content: "As stated already, not a single religious activity could be accomplished without the incantation of sacred Mantras. This could be because, Mantra are believed to be the means to get connected with the almighty God. It is a way to seek his blessings for prosperous life, atone for commited sins, attain salvation and so much more. In Vedic period, mantras were recited for praying the deities for the fulfillment of a particular task like childbirth, peaceful marriage, cure for an illness, commencement of an auspicious activity without any obstacle and so on. In other words, mantras were chanted to overcome the uncertainties and dilemmas of people’s life.<br><br>In today’s period, Mantras are still chanted for accomplishing various task in a person’s life without any hindrance or problem. Mantra like Shani Mantra, Surya Mantra, etc are chanted to appease these powerful planets, obtain their blessings and lessen their malefic influence in one’s life. Similarly, there are other mantras to appease all the planets and to have their blessings for successfully concluding a task. There are also Mantras, which are the means to get close to Hindu deities. For example, Ganesh Mantra, which is traditionally chanted before beginning any propitious activity. It is also known as Siddhi Mantra, which holds the power of Lord Ganesha to ward off all obstacles and troubles, and blesses devotees with success and prosperity.<br><br>Mantras are also a medium to meditate and seek spiritual serenity. By chanting mantras while meditating, makes your soul unite with that of the cosmic energy. Om Mantra is such an example and is considered the sound of the Universe or the almighty himself. It creates sensations that invokes numinous effects and helps incite an altered state of consciousness which connects a person to the world beyond existence. Other than this, Gayatri Mantra is an another example that holds religious significance. It is the mantra to cleanse one’s heart, body and soul from all that is evil, and leads to the path of righteousness and truth. All in all, these divine and spiritual incantations can be understood as the means for a human to attain peace, happiness, success and prosperity.",
  //   },
  //   {
  //     title: "Mantra to Attain Supreme Happiness",
  //     content: "Mantras are the basis of entire texts of all vedic scriptures and books and are considered a powerful medium that invokes feelings of spiritualism in a person. There are various sacred mantras in Hinduism that sages, astrologers and even general people chant for religious and auspicious rituals as well as for meditation purpose. Some of the most powerful mantras along with their benefits are mentioned as follows:<br>Om Mantra: In Hinduism, this single syllable mantra (ॐ) is the essence of all Veda, mantras, rituals and everything that exists. It is a Science in itself which is acknowledged and accepted by the people in Hinduism, Jainism and Buddhism. It is also adopted as a significant part of Meditation or Yoga. People chanting this mantra feel serene, calm and peaceful. It also helps in improving concentration, aids various body ailments like blood pressure, heart problems, helps in digestion, removes body toxins, etc.<br>Gayatri Mantra: This Mantra has religious significance and is divine and ancient in itself. Maa Gayatri is believed to be the mother of all Veda, called Vedmata, and source of all knowledge. She is also known by the name of Savitri and is generally associated with Savitr, the solar deity as per Vedas. Chanting this mantra at least 3 times in the morning and evening bestows a person with wisdom and great knowledge as well as brings spiritual and physical benefits.<br>Mahamrityunjaya Mantra: Also called the Mantra of Lord Shiva, Mahamrityunjaya Mantra is a highly sacred and divine mantra in Hindu religion. It is also known as Tryambakam Mantra and Moksha Mantra. It is the mantra for spiritual benefits and to attain salvation in afterlife. Chanting this mantra on regular basis benefits a person with good health, peace, wealth, prosperity and long life. It also generates positive vibrations in a person and protects against natural and unknown calamities.<br>Ganesh Mantra: This is the mantra associated with Lord Ganesha and is known for its ability to remove all obstacles from a person’s lives. Whenever an auspicious activity takes place, Ganesh Mantra is the first mantra which is recited in beginning for successful completion of the activity without any hindrance or obstacle. It is the mantra to success, prosperity and wealth. Regular chanting of the mantra regulates blood circulation, improves concentration and is good for metabolism. It also protects a person from their enemies as well as other problems of lives.<br>Laxmi Mantra: The Goddess of all riches, wealth, health and prosperity, Lakshmi ji is associated with Laxmi Mantra. Chanting this mantra means to know your goal and accomplishing it. It is not only to gain financial stability, but also to seek the blessings of the Goddess for intelligence and understanding. Regular chanting of the mantra brings abundance of health, riches, finances and relationships as well as also helps in attaining one’s goals in life.<br>Thus, all these powerful mantras along with other significant ones such as Durga Mantra, Kuber Mantra, Saraswati Mantra, etc are beneficial for a person when chanted regularly. These Mantras are a way to attain good health and longevity, love and happiness, peace and prosperity, knowledge and wisdom, gain the ultimate truth of one’s existence, and to get unite with the almighty. They are also the means to calm your senses, feel divine vibrations and a source of cleansing every part of your body and soul. So, read about each mantra on their pages and start chanting Mantras for a healthy, happy and successful life!",
  //   },
  // ]

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSvgColors();
  }

  loadSvgColors() {
    this.svgColor = this.themeService.getSvgColor()
  }

}
