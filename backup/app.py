from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def index():
    image_folder = os.path.join("static", "images", "slides")
    if os.path.exists(image_folder):
        images = sorted([
            f for f in os.listdir(image_folder)
            if f.lower().endswith(('.jpg', '.jpeg', '.png'))
        ])
    else:
        images = []  # ← フォルダが無いときもエラーを出さない！

    return render_template("index.html", images=images)
@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/gallery")
def gallery():
    image_folder = os.path.join("static", "images", "gallery")
    image_files = sorted([
        f for f in os.listdir(image_folder)
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))
    ])
    return render_template("gallery.html", images=image_files)

@app.route("/videos")
def videos():
    video_folder = os.path.join("static", "videos")
    video_files = [f for f in os.listdir(video_folder) if f.endswith(".mp4")]

    # ファイル名 → 表示タイトル の辞書
    title_map = {
        "恋愛裁判ピアノ ‐ Clipchampで作成.mp4": "🎵 恋愛裁判 ピアノ演奏",
    }

    # 辞書を使って (filename, display_title) のタプルリストを作成
    video_info = [(f, title_map.get(f, f)) for f in video_files]

    return render_template("videos.html", videos=video_info)
if __name__ == '__main__':
    app.run(debug=True)

