<?php
/**
 * The front page template file.
 * The front-page.php template file is used to render your site’s front page,
 * whether the front page displays the blog posts index (mentioned above) or a static page.
 * The front page template takes precedence over the blog posts index (home.php) template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#front-page-display
 *Template Name: Homepage
 * @package OnePress
 */

get_header(); ?>

	<div id="content" class="site-content">

		<?php echo onepress_breadcrumb(); ?>

        <div id="content-inside" class="container right-sidebar">
        	<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">                     
					<div class="col-sm-12 introduction">Viland Implement
					of Pipestone, MN is an independent used farm machinery dealer in Southwest Minnesota. We carry a wide selection of
					combine attachments, baler, planters, trailers and even automobiles. View the different sections of inventory that are
					for sale to see if there is something you are interested in.
					</div>
					<div class="col-sm-12">
						<div class="col-sm-6 inventoryTypes" style="background: url(../Media/attachmentPhoto.png);">
							<a href="/attachments" class="inventoryTypeLinks col-sm-12">Attachments</a>
						</div>
						<div class="col-sm-6 inventoryTypes" style="background: url(../Media/JohnDeereCombine.jpg);">
							<a href="/combinestractors" class="inventoryTypeLinks col-sm-12">Combines And Tractors</a>
						</div>
						<div class="col-sm-6 inventoryTypes" style="background: url(../Media/fordTruck.png);">
							<a href="/automobiles" class="inventoryTypeLinks col-sm-12">Automobiles</a>
						</div>
						<div class="col-sm-6 inventoryTypes" style="background: url(../Media/tritontrailer.png);">
							<a href="/trailers" class="inventoryTypeLinks col-sm-12">Trailers</a>
						</div>
					</div>
				</main><!-- #main -->
			</div><!-- #primary -->

			<?php get_sidebar(); ?>

		</div><!--#content-inside -->
	</div><!-- #content -->

<?php get_footer(); ?>
