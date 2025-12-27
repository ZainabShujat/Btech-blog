-- Create article_stats table
CREATE TABLE article_stats (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create user_likes table (track who liked what)
CREATE TABLE user_likes (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  user_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(slug, user_id)
);

-- Create indexes for better performance
CREATE INDEX idx_article_stats_slug ON article_stats(slug);
CREATE INDEX idx_user_likes_slug ON user_likes(slug);
CREATE INDEX idx_user_likes_user_id ON user_likes(user_id);

-- Create function to increment views
CREATE OR REPLACE FUNCTION increment_views(article_slug TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  INSERT INTO article_stats (slug, views)
  VALUES (article_slug, 1)
  ON CONFLICT (slug)
  DO UPDATE SET
    views = article_stats.views + 1,
    updated_at = NOW();
  
  SELECT views INTO new_count
  FROM article_stats
  WHERE slug = article_slug;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql;

-- Create function to increment likes
CREATE OR REPLACE FUNCTION increment_likes(article_slug TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  INSERT INTO article_stats (slug, likes)
  VALUES (article_slug, 1)
  ON CONFLICT (slug)
  DO UPDATE SET
    likes = article_stats.likes + 1,
    updated_at = NOW();
  
  SELECT likes INTO new_count
  FROM article_stats
  WHERE slug = article_slug;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql;

-- Create function to decrement likes
CREATE OR REPLACE FUNCTION decrement_likes(article_slug TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE article_stats
  SET likes = GREATEST(likes - 1, 0),
      updated_at = NOW()
  WHERE slug = article_slug;
  
  SELECT likes INTO new_count
  FROM article_stats
  WHERE slug = article_slug;
  
  RETURN COALESCE(new_count, 0);
END;
$$ LANGUAGE plpgsql;
