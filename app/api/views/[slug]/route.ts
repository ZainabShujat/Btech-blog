import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const { data, error } = await supabaseAdmin
      .from('article_stats')
      .select('views')
      .eq('slug', slug)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return NextResponse.json({ views: data?.views || 0 });
  } catch (error) {
    console.error('Error fetching views:', error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Upsert: insert or update
    const { data, error } = await supabaseAdmin
      .from('article_stats')
      .upsert(
        { slug, views: 1 },
        { onConflict: 'slug', ignoreDuplicates: false }
      )
      .select()
      .single();

    if (error) {
      // If record exists, increment
      const { data: updated, error: updateError } = await supabaseAdmin.rpc(
        'increment_views',
        { article_slug: slug }
      );

      if (updateError) throw updateError;
      return NextResponse.json({ views: updated });
    }

    return NextResponse.json({ views: data.views });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return NextResponse.json({ error: 'Failed to increment views' }, { status: 500 });
  }
}
