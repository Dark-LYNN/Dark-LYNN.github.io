<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="/images/Overwatch_circle_logo.svg.png">
    <title>Directory Contents</title>

    <!-- Discord Embed -->
    <meta property="og:title" content="Lynnux CDN files" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://cdn.lynnux.xyz/" />
    <meta name="theme-color" content="#de403c">
    <meta name="twitter:card" content="summary_large_image">

    <link rel="stylesheet" href="/style.css">
    <script src="/sorttable.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module"></script>
</head>

<body>
    <div id="container">
        <h1>/Hero's/Illari/</h1>
        <table class="sortable">
            <thead>
                <tr>
                    <th>Filename</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Date Modified</th>
                </tr>
            </thead>
            <tbody>
                <tr class='directory'>
                    <td><a href='../' class='name'>...</a></td>
                    <td><a href='../'>&lt;GO BACK&gt;</a></td>
                    <td sorttable_customkey='1'><a href='../'>N/A</a></td>
                    <td sorttable_customkey='1'><a href='../'>N/A</a></td>
                </tr>
                <?php
                $directory = './'; // Change this to the path of the directory you want to list
                $files = scandir($directory);
                foreach ($files as $file) {
                    if ($file != "." && $file != "..") {
                        $path = $directory . $file;
                        $isDirectory = is_dir($path);
                        $type = $isDirectory ? "&lt;Directory&gt;" : "File";
                        $size = $isDirectory ? "N/A" : filesize($path);
                        $dateModified = $isDirectory ? "N/A" : date("M d Y H:i:s", filemtime($path));
                        echo "<tr class='directory'>";
                        echo "<td><a href='$path' class='name'>$file</a></td>";
                        echo "<td><a href='$path'>$type</a></td>";
                        echo "<td sorttable_customkey='$size'><a href='$path'>$size</a></td>";
                        echo "<td sorttable_customkey='$dateModified'><a href='$path'>$dateModified</a></td>";
                        echo "</tr>";
                    }
                }
                ?>
            </tbody>
        </table>
    </div>
    <button id="mode-toggle">
        <ion-icon name="moon-outline"></ion-icon>
    </button>
</body>
<script src="/mode.js"></script>
</html>
