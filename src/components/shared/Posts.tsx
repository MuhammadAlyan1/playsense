import Post from './Post';
const now = new Date();

const posts = [
  {
    id: '1',
    username: 'LethalFlakes',
    avatar:
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userId: 'userid1',
    content: `Diving into the latest RPG release, and the storyline is mind-blowing! 🧙‍♂️🔮 Every quest feels like an emotional rollercoaster, and the character development is top-notch. The graphics are stunning, and the soundtrack is giving me all the feels. Who else gets completely immersed in the gaming universe? It's like being transported to another reality. Share your favorite RPG recommendations – I'm always on the lookout for the next gaming masterpiece! 🌌🎮 #RPGGaming #GamerCommunity #GamingJourney`,
    createdAt: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    likes: 10,
    likedBy: ['id1', 'id2', 'id3', 'id4'],
    dislikes: 5212,
    dislikedBy: ['id1', 'id2', 'id3', 'id4'],
    comments: 2320,
    commentedBy: ['id1', 'id2', 'id3', 'id4']
  },
  {
    id: '2',
    username: 'LethalFlakes',
    avatar:
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userId: 'userid1',
    content: `Just finished an epic gaming session with my squad! 🎮 We tackled a challenging raid in our favorite MMORPG, and the teamwork was on point. From coordinating strategies to those heart-pounding moments when victory hung in the balance – gaming nights like these are what it's all about. Shoutout to my gaming buddies for the laughs and unforgettable moments. We even discovered a few Easter eggs in the game that blew our minds! 🕹️👾 #GamerLife #SquadGoals #MMORPGAdventures`,
    createdAt: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
    likes: 50000,
    likedBy: ['id1', 'id2', 'id3', 'id4'],
    dislikes: 5,
    dislikedBy: ['id1', 'id2', 'id3', 'id4'],
    comments: 20,
    commentedBy: ['id1', 'id2', 'id3', 'id4']
  },
  {
    id: '3',
    username: 'LethalFlakes',
    avatar:
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userId: 'userid1311',
    content: `Late-night gaming vibes hitting hard! 🌙🎮 There's something magical about the quiet hours when it's just me, my console, and the glow of the screen. Currently on a nostalgic trip, replaying some classic titles that defined my childhood. It's incredible how these games still hold up after all these years. What's your go-to game for a late-night gaming session? Let's reminisce about the classics and share our favorite gaming memories! 🕹️✨ #LateNightGaming #NostalgiaTrip #GamingCommunity`,
    createdAt: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
    likes: 13120,
    likedBy: ['id1', 'id2', 'id3', 'id4'],
    dislikes: 5123,
    dislikedBy: ['id1', 'id2', 'id3', 'id4'],
    comments: 2023,
    commentedBy: ['id1', 'id2', 'id3', 'id4']
  },
  {
    id: '4',
    username: 'LethalFlakes',
    avatar:
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userId: 'userid1231',
    content: `Reached a major milestone in my favorite competitive game! 🏆 After weeks of practice and dedication, I finally hit that coveted rank. The journey was tough – faced some fierce opponents, learned new strategies, and maybe threw in a victory dance or two. Shoutout to the gaming community for the support and tips along the way. Now, it's time to set new goals and continue leveling up. Who else loves the thrill of competitive gaming? Share your triumphs and challenges! 🚀🎮 #GamerAchievement #CompetitiveGaming #LevelUp`,
    createdAt: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    likes: 5,
    likedBy: ['id1', 'id2', 'id3', 'id4'],
    dislikes: 5,
    dislikedBy: ['id1', 'id2', 'id3', 'id4'],
    comments: 20,
    commentedBy: ['id1', 'id2', 'id3', 'id4']
  },
  {
    id: '5',
    username: 'LethalFlakes',
    avatar:
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userId: 'userid213',
    content: 'Anyone down to play a few matches together?',
    createdAt: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    likes: 5,
    likedBy: ['id1', 'id2', 'id3', 'id4'],
    dislikes: 5,
    dislikedBy: ['id1', 'id2', 'id3', 'id4'],
    comments: 20,
    commentedBy: ['id1', 'id2', 'id3', 'id4']
  }
];
const Posts = () => {
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
